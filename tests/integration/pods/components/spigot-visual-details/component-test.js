import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('spigot-visual-details', 'Integration | Component | spigot visual details', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{spigot-visual-details}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#spigot-visual-details}}
      template block text
    {{/spigot-visual-details}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
