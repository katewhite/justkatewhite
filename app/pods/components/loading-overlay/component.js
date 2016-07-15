import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['loading-overlay'],
	didUpdateAttrs() {
		this._super(...arguments);
	}
});
