import Ember from 'ember';
import ResetScroll from 'justkatewhite/mixins/reset-scroll';
import HandleOnLoad from 'justkatewhite/mixins/handle-onload';

export default Ember.Route.extend(ResetScroll, HandleOnLoad, {
	model: function() {
		return this.store.findAll('project');
	}
});
