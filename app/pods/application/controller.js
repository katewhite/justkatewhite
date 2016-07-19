export default Ember.Controller.extend({
	sr: ScrollReveal(),
	timeoutComplete: false,
	imagesLoaded: false,
	firstTimeLoad: true,
	showIndicator: false,
	showOverlay: Ember.computed('timeoutComplete', 'imagesLoaded', function() {
		if (this.get('timeoutComplete') && !this.get('imagesLoaded')) {
			this.set('showIndicator', true);
			$('body').fadeTo(0, 1);
			return true;
		}
		else if (!this.get('timeoutComplete') || !this.get('imagesLoaded')) {
			if (!this.get('firstTimeLoad')) {
				$('body').fadeTo(0, 0);
			}
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
			$('#main-nav').removeClass('animated fadeInDown').addClass('animated fadeInDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      			$(this).removeClass('animated fadeInDown');
			});
			$('#mobile-nav').removeClass('animated fadeInDown').addClass('animated fadeInDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      			$(this).removeClass('animated fadeInDown');
			});

			// PROJECT CONTENT ANIMATIONS ON SCROLL
			this.get('sr').reveal('.project-body, .project-header, .project-component', { duration: 1500, viewFactor: 0.3 });
			this.get('sr').reveal('.project-image', { duration: 1500, viewFactor: 0.05 });
			
			// HANDLE NAV BAR STATE ON SCROLL
			$(window).scroll(function(){
			    var scrollTop = $(window).scrollTop();
			    if (scrollTop > 49) {
			        $('.header-container').addClass('fixed');
			    } else {
			        $('.header-container').removeClass('fixed');
			    }
			});
			this.set('showIndicator', false);
			this.set('firstTimeLoad', false);
			// FADE BODY IN AND OUT ON TRANSITIONS
			setTimeout(function() { $('body').fadeTo(0, 1) }, 250);

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