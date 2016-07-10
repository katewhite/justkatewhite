import HandleOnLoad from 'justkatewhite/mixins/handle-onload';

export default Ember.Controller.extend(HandleOnLoad, {
	allProjects: function() {
		return this.store.peekAll('project');
	}.property()
});

