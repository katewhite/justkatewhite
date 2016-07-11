export default Ember.Controller.extend({
	timeoutComplete: false,
	imagesLoaded: false,
	actions: {
		scroll: function() {
			var parentContainer = Ember.$('.headline-wrapper');
		    var scrollTop = parentContainer.position().top + parentContainer.scrollTop() - 10;
		    parentContainer.animate({
		      scrollTop: scrollTop
		    }, 1000);
		}
	},
	showOverlay: Ember.computed('timeoutComplete', 'imagesLoaded', function() {
		return (!this.get('timeoutComplete') || !this.get('imagesLoaded'));
	})
});