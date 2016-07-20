import Ember from 'ember';
import HandleOnLoad from 'justkatewhite/mixins/handle-onload';

export default Ember.Route.extend(HandleOnLoad, {
	model: function(attrs) {
		return this.store.peekRecord('project', attrs.id);
	}
});
