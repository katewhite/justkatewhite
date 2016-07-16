import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('aventura-original-new-login', 'Integration | Component | aventura original new login', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{aventura-original-new-login}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#aventura-original-new-login}}
      template block text
    {{/aventura-original-new-login}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
