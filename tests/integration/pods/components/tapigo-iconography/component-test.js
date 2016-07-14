import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('tapigo-iconography', 'Integration | Component | tapigo iconography', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{tapigo-iconography}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#tapigo-iconography}}
      template block text
    {{/tapigo-iconography}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
