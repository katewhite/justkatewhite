import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('enigami-logo-typography', 'Integration | Component | enigami logo typography', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{enigami-logo-typography}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#enigami-logo-typography}}
      template block text
    {{/enigami-logo-typography}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
