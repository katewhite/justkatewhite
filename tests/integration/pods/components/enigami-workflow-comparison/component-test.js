import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('enigami-workflow-comparison', 'Integration | Component | enigami workflow comparison', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{enigami-workflow-comparison}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#enigami-workflow-comparison}}
      template block text
    {{/enigami-workflow-comparison}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
