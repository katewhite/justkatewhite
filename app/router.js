import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('work', { path: '/' });
  this.route('project', { path: '/:id' });
  this.route('about');
  this.route('contact');
});

export default Router;
