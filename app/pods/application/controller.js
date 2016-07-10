export default Ember.Controller.extend({
	timeoutComplete: false,
	imagesLoaded: false,
	showOverlay: Ember.computed('timeoutComplete', 'imagesLoaded', function() {
		return (!this.get('timeoutComplete') || !this.get('imagesLoaded'));
	})
});