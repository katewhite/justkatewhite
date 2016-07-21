import Ember from 'ember';
import HandleOnLoad from 'justkatewhite/mixins/handle-onload';

export default Ember.Component.extend(HandleOnLoad, {
	classNames: ["portfolio-item"],
	formattedName: Ember.computed('model.name', function() {
		var str = this.get('model.name').replace(/\s+/g, '-').toLowerCase();
		return str;
	})
});
