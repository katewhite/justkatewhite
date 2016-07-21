import Ember from 'ember';
import HandleOnLoad from 'justkatewhite/mixins/handle-onload';
import ResetScroll from 'justkatewhite/mixins/reset-scroll';

export default Ember.Route.extend(ResetScroll, HandleOnLoad, {
	model: function() {
		return this.store.findAll('project');
	},
	handleActivate: function() {
		let appController = this.controllerFor('application');
		appController.set('firstTimeLoad', true);
		var self = this;
		setTimeout(function() { self.setTimeoutComplete(true) }, 500);
		// Ember.run.schedule('afterRender', this, function () {
	 //    	this.handleAfterRender();
	 //    });
	}.on('activate')
});