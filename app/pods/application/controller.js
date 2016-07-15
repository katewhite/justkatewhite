export default Ember.Controller.extend({

	timeoutComplete: false,
	imagesLoaded: false,
	showOverlay: Ember.computed('timeoutComplete', 'imagesLoaded', function() {
		if (!this.get('timeoutComplete') || !this.get('imagesLoaded')) {
			
			return true;
		}
		else {
			// WORK ANIMATIONS
			$('#work-headline').removeClass('animated fadeInLeft').addClass('animated fadeInLeft').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      			$(this).removeClass('animated fadeInLeft');
			});
			$('#work-subtitle').removeClass('animated fadeInLeft').addClass('animated fadeInLeft').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      			$(this).removeClass('animated fadeInLeft');
			});
			return false;
		};
	}),
	scrollTop: Ember.observer('showOverlay', function() {
		if (this.get('showOverlay')) {
			// Hold off on scrolling top for the amount of time the fade route transition is set for.
			setTimeout(function() { window.scrollTo(0,0) }, 1000);
		}
	})
});