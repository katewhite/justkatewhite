import Ember from 'ember';

export default Ember.Mixin.create({
	actions: {
		// Have to handle willTransition as well for the case when we are switching between projects.
		// Switching from project/spigot to project/tapigo does not throw the activate event.
		willTransition: function(transition) {
			console.log('WILL TRANSITION');
			var self = this;
			// Reset values so we see the overlay everytime
			this.setTimeoutComplete(false);
			this.setImagesLoaded(false);
			// Show the overlay for a minimum of 2 seconds to avoid skippy-ness
			setTimeout(function() { self.setTimeoutComplete(true) }, 1000);
			Ember.run.schedule('afterRender', this, function () {
		    	this.handleAfterRender();
		    });
		}
	},

	handleActivate: function() {
		var self = this;
		setTimeout(function() { self.setTimeoutComplete(true) }, 2000);
		Ember.run.schedule('afterRender', this, function () {
	    	this.handleAfterRender();
	    });
	}.on('activate'),

	checkForImagesLoaded: function(eventName) {
		console.log("checking for images loaded: " + eventName);
		var self = this;
		$('.load-image').imagesLoaded({ background: true })
		.always( function( instance ) {
			self.setImagesLoaded(true);
			console.log('all images loaded');
		})
		.fail( function() {
			console.log('all images loaded, at least one is broken');
		})
		.progress( function( instance, image ) {
			var result = image.isLoaded ? 'loaded' : 'broken';
			console.log( 'image is ' + result + ' for ' + image.img.src );
		});
	},

	setImagesLoaded: function(value) {
		let appController = this.controllerFor('application');
		appController.set('imagesLoaded', value);
	},

	setTimeoutComplete: function(value) {
		let appController = this.controllerFor('application');
		appController.set('timeoutComplete', value);
	},

	handleAfterRender: function() {
		this.checkForImagesLoaded("afterRender");
	}
});