import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | basic todo functionality', function(hooks) {
  setupApplicationTest(hooks);

  test('show index page as default', async function(assert) {
    await visit('/');
    assert.equal(currentURL(), '/', 'shouldn\'t redirect');
  });

  test('can add new todo', async function() {
  });

  test('can delete todo', async function() {
  });

  test('shows existing todos', async function() {
  });
});
