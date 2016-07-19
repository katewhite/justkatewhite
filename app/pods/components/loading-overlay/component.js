import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['loading-overlay'],
	isFirstTimeLoad: function() {
		let appController = this.controllerFor('application');
		if (appController.get('firstTimeLoad')) {
			return true;
		}
		else { 
			return false;
		}
	}.property()
});
