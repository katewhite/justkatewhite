export default Ember.Controller.extend({
	
	timeoutComplete: false,
	imagesLoaded: false,
	showOverlay: Ember.computed('timeoutComplete', 'imagesLoaded', function() {
		if (!this.get('timeoutComplete') || !this.get('imagesLoaded')) {
			window.scrollTo(0,0);
			return true;
		}
		else {
			// $('.headline-wrapper').velocity("slideDown", { delay: 500, duration: 1500 });
			// var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
			// $('#test').addClass('animated').one(animationEnd, function() {
			// 	console.log('Removing "animated" class');
			// 	$(this).removeClass('animated');
	  //       });
			return false;
		};
	})
});