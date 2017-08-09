var qunit = require('qunitjs');
var plus = require('../src/plus');

qunit.module('plus');

qunit.test('Plus test', function(assert) {
  assert.equal(plus(3, 4), 7);
  assert.equal(plus(undefined, 4), 4);
  assert.equal(plus(111, undefined), 111);
  assert.equal(plus(undefined, undefined), 0);
});
