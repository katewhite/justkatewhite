import Ember from 'ember';

export default Ember.Component.extend({
	isMenuOpen: false,
	actions: {
		toggleMenuState: function() {
			this.toggleProperty('isMenuOpen');
		}
	}
});
