import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Unit | Adapter | taxonomy', hooks => {
    setupTest(hooks);

    // Replace this with your real tests.
    test('it exists', function(assert) {
        const adapter = this.owner.lookup('adapter:taxonomy');
        assert.ok(adapter);
    });
});
