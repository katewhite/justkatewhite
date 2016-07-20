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
			// Show the overlay for a minimum of 2 seconds to avoid skippy-ness
			setTimeout(function() { self.setTimeoutComplete(true) }, 1000);
		}
	},

	setTimeoutComplete: function(value) {
		let appController = this.controllerFor('application');
		appController.set('timeoutComplete', value);
	}
});