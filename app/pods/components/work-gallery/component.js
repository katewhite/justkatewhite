import Ember from 'ember';

export default Ember.Component.extend({
	rows: [],
	init: function() {
		for (var i = 0; i < this.get('model').get('length'); i++) {
			// Only process the even numbered items (the firsts in the row)
			if (i % 2 == 0) {
				var isLeft = false;
				var isHalf = false;
				var isRight = false;
				if (this.get('model').objectAt(i).get('rowConfig') == "left") {
					isLeft = true;
				}
				else if (this.get('model').objectAt(i).get('rowConfig') == "half") {
					isHalf = true;
				}
				else if (this.get('model').objectAt(i).get('rowConfig') == "right") {
					isRight = true;
				}
				// Add the item to this row, and the next item in the list
				this.get('rows').push({isLeft:isLeft, isHalf:isHalf, isRight:isRight, projects:[this.get('model').objectAt(i), this.get('model').objectAt(i+1)]});
			}
		}
		this._super(...arguments);
	}
});
