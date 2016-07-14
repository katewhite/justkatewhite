import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('tapigo-color-typeface', 'Integration | Component | tapigo color typeface', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{tapigo-color-typeface}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#tapigo-color-typeface}}
      template block text
    {{/tapigo-color-typeface}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
