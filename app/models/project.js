import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
	name: attr(),
	thumbnailSubtitle: attr(),
	description: attr(),
	subtitle: attr(),
	thumbnailImage: attr(),
	thumbnailImageSrcset: attr(),
	thumbnailImageSizes: attr(),
	bannerImage: attr(),
	bannerImageSrcset: attr(),
	bannerImageSizes: attr(),
	contents: hasMany('content')
});