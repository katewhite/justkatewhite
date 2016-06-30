import Ember from 'ember';

export default Ember.Route.extend({
	model: function(attrs) {
		return this.store.peekRecord('project', attrs.id);
	},
	allProjects: function() {
		return this.store.peekAll('project');
	}
});
