import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
	name: attr(),
	description: attr(),
	rowConfig: attr(),
	color: attr(),
	thumbnailImage: attr(),
	bannerImage: attr(),
	contents: hasMany('content')
});