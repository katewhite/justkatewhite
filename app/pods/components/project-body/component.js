import Ember from 'ember';
import HandleOnLoad from 'justkatewhite/mixins/handle-onload';
import ViewportEntry from 'justkatewhite/mixins/viewport-entry';

export default Ember.Component.extend(HandleOnLoad, ViewportEntry, {
	classNames: ['project-body']
});
