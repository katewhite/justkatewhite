export default Ember.Controller.extend({
	actions: {
		toggleAnimation: function() {
			$('#test').removeClass('animated fadeInLeft').addClass('animated fadeInLeft').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      			$(this).removeClass('animated fadeInLeft');
			});
		}
	}
});