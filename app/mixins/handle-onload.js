import Ember from 'ember';

export default Ember.Mixin.create({
	totalImageCount: 0,
	actions: {
		// Have to handle willTransition as well for the case when we are switching between projects.
		// Switching from project/spigot to project/tapigo does not throw the activate event.
		willTransition: function(transition) {
			console.log('WILL TRANSITION');
			var self = this;
			// Reset values so we see the overlay everytime
			this.setTimeoutComplete(false);
			// this.setImagesLoaded(false);
			// Show the overlay for a minimum of 2 seconds to avoid skippy-ness
			setTimeout(function() { self.setTimeoutComplete(true) }, 1000);
			// Ember.run.schedule('afterRender', this, function () {
		 //    	this.handleAfterRender();
		 //    });
		}
	},

	// checkForImagesLoaded: function(eventName) {
	// 	console.log("checking for images loaded: " + eventName);
	// 	var self = this;
	// 	// let imgCount = 0;
	// 	// setTimeout(function() {
	// 	// 	self.set('totalImageCount', $('.load-image').length);
	// 	// 	console.log('totalImage count = ' + self.get('totalImageCount'));
	// 	// 	$('.load-image').load(function( instance, image ) {
	// 	// 		self.set('totalImageCount', $('.load-image').length);
	// 	// 		console.log('totalImage count = ' + self.get('totalImageCount'));
	// 	// 		let appController = self.controllerFor('application');
	// 	// 		appController.incrementProperty('currentImageCount');
	// 	// 		console.log(instance.target.currentSrc + " | " + " currentImageCount = " + appController.get('currentImageCount') + " totalImageCount = " + self.get('totalImageCount'));
	// 	// 		if (appController.get('currentImageCount') >= self.get('totalImageCount')) {
	// 	// 			self.setImagesLoaded(true);
	// 	// 			console.log('all images loaded');
	// 	// 		}
	// 	// 	}).error(function() {
	// 	// 		console.error('ERROR LOADING IMAGES');
	// 	// 		// Fail-safe.  Still go ahead and show page
	// 	// 		self.setImagesLoaded(true);
	// 	// 	});
	// 	// }, 2000);
	// 	self.setImagesLoaded(true);
	// },

	// setImagesLoaded: function(value) {
	// 	let appController = this.controllerFor('application');
	// 	appController.set('imagesLoaded', value);
	// },

	setTimeoutComplete: function(value) {
		let appController = this.controllerFor('application');
		appController.set('timeoutComplete', value);
	},

	// handleAfterRender: function() {
	// 	this.checkForImagesLoaded("afterRender");
	// }
});