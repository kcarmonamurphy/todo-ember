import EmberObject from '@ember/object';
import StringMethodsMixin from 'todo/mixins/string-methods';
import { module, test } from 'qunit';

module('Unit | Mixin | StringMethods', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let StringMethodsObject = EmberObject.extend(StringMethodsMixin);
    let subject = StringMethodsObject.create();
    assert.ok(subject);
  });
});
