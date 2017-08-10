var qunit = require('qunitjs');
var Stack = require('../src/stack');

qunit.module('stack');

qunit.test('Stack test', function(assert) {
  var stack = new Stack();

  assert.equal(stack.top(), -1, 'The top of an empty stack test');

  stack.push(1);
  stack.push(2);
  stack.push(3);

  assert.equal(stack.top(), 2);
  assert.equal(stack.pop(), 3);
  assert.deepEqual(stack.elements, [1, 2]);
  assert.equal(stack.pop(), 2);
  assert.equal(stack.pop(), 1);
  assert.deepEqual(stack.elements, []);
  assert.equal(stack.pop(), undefined);
  assert.equal(stack.top(), -1);
  assert.equal(stack.isEmpty(), true);


  stack.push(1);
  stack.push(2);
  stack.push(3);

  assert.deepEqual(stack.elements, [1, 2, 3]);
  assert.equal(stack.top(), 2);

  stack.clear();

  assert.deepEqual(stack.elements, []);
  assert.equal(stack.top(), -1);
  assert.equal(stack.isEmpty(), true);

});
