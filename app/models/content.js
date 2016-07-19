import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
	contentType: attr(),
	content: attr(),
	class: attr(),
	srcset: attr(),
	sizes: attr(),
	project: belongsTo('project'),

	// Computed
	isHeader: Ember.computed('contentType', function() {
		return (this.get('contentType') == "header");
	}),
	isBody: Ember.computed('contentType', function() {
		return (this.get('contentType') == "body");
	}),
	isImage: Ember.computed('contentType', function() {
		return (this.get('contentType') == "image");
	}),
	isComponent: Ember.computed('contentType', function() {
		return (this.get('contentType') == "component");
	})
});
