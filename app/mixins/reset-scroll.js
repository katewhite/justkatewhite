import Ember from 'ember';

export default Ember.Mixin.create({
	activate: function() {
		this._super();
		//window.scrollTo(0,0);
		// Ember.run.scheduleOnce('afterRender', this, function(){
	 //      window.scrollTo(0, 0);
	 //    });
	}
});