import Ember from 'ember';

export default Ember.Component.extend({
	model: function() {

	},
	overlayVisible: false,
	mouseEnter: function() {
		this.set('overlayVisible', true);
	},
	mouseLeave: function() {
		this.set('overlayVisible', false);
	},
});
