import Ember from 'ember';
import HandleOnLoad from 'justkatewhite/mixins/handle-onload';
import ResetScroll from 'justkatewhite/mixins/reset-scroll';

export default Ember.Route.extend(ResetScroll, HandleOnLoad, {
	model: function() {
		return this.store.findAll('project');
	}
});