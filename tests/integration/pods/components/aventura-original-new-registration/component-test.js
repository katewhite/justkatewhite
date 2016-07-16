import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('aventura-original-new-registration', 'Integration | Component | aventura original new registration', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{aventura-original-new-registration}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#aventura-original-new-registration}}
      template block text
    {{/aventura-original-new-registration}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
