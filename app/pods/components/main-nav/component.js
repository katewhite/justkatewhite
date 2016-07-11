import Ember from 'ember';
import HandleOnLoad from 'justkatewhite/mixins/handle-onload';

export default Ember.Component.extend(HandleOnLoad, {
	classNames: ['main-nav'],
	actions: {
		toggleAnimation: function() {
			//Add the animate-css class "animated" to all items with the to-animate class
			var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
			var $elem = $('.to-animate');
			$elem = this.reset($elem);
			console.log('Adding "animated" class');
	        $elem.addClass('animated');
		}
	},

	reset: function($elem) {
		$elem.before($elem.clone(true));
		var $newElem = $elem.prev();
		$elem.remove();
		return $newElem;
	}
});
