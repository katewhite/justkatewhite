import Ember from 'ember';
import HandleOnLoad from 'justkatewhite/mixins/handle-onload';

export default Ember.Route.extend(HandleOnLoad, {
	model: function() {
		return this.store.findAll('project');
	},
	handleActivate: function() {
		let appController = this.controllerFor('application');
		appController.set('firstTimeLoad', true);
		var self = this;
		setTimeout(function() { self.setTimeoutComplete(true) }, 2000);
		// Ember.run.schedule('afterRender', this, function () {
	 //    	this.handleAfterRender();
	 //    });
	}.on('activate')
});