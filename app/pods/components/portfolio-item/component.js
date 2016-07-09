import Ember from 'ember';
import HandleOnLoad from 'justkatewhite/mixins/handle-onload';

export default Ember.Component.extend(HandleOnLoad, {
	model: function() {

	},
	overlayVisible: false,
	mouseEnter: function() {
		this.set('overlayVisible', true);
		var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		$(this).find('.project-name').addClass('animated fadeInDown').one(animationEnd, function() {
            $(this).find('.project-name').removeClass('animated fadeInDown');
        });
	},
	mouseLeave: function() {
		this.set('overlayVisible', false);
	}
});
