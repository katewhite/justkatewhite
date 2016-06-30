import JSONAPIAdapter from 'ember-data/adapters/json-api';

export default JSONAPIAdapter.extend({
  urlForFindAll(modelName) {
    return 'data/projects.json';
  }
});