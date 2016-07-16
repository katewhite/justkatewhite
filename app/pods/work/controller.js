export default Ember.Controller.extend({
	currentProject: null, 
	haveCurrentProject: Ember.computed('currentProject', function() {
		if (this.get('currentProject')) {
			return true;
		}
		else {
			return false;
		}
	})
});