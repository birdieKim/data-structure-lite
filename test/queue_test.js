var qunit = require('qunitjs');
var Queue = require('../src/queue');

qunit.module('queue');

qunit.test('Queue test', function(assert) {
  var queue = new Queue();

  console.log(queue);

  assert.equal(queue.peek(), undefined, 'Empty peek test');

  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);

  assert.equal(queue.peek(), 1);
  assert.equal(queue.dequeue(), 1);
  assert.deepEqual(queue.elements, [2, 3]);
  assert.equal(queue.dequeue(), 2);
  assert.equal(queue.dequeue(), 3);
  assert.deepEqual(queue.elements, []);
  assert.equal(queue.dequeue(), undefined);
  assert.equal(queue.peek(), undefined);
  assert.equal(queue.rear(), 0);
});
