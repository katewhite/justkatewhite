export default Ember.Controller.extend({
	actions: {
		toggleAnimation: function() {
			$('#test').removeClass('animated').addClass(' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      			$(this).removeClass();
			});
		}
	}
});