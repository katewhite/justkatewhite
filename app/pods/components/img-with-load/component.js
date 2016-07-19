import Ember from 'ember';

export default Ember.Component.extend({
	didInsertElement: function() {
		var self = this;
		// Animate fade in and out until image is loaded
		this.$('.loading-image-container').removeClass('animated infinite fadeIn').addClass('animated infinite fadeIn');
		this.$('img').load(function( instance, image ) {
			console.log("Loaded image " + instance.target.currentSrc);
			self.set('loading', false);
			self.$('.loading-image-container').removeClass('animated infinite fadeIn');
		});
	},
	loading: true
});
