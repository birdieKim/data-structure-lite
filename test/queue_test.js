var qunit = require('qunitjs');
var Queue = require('../src/queue');
var PriorityQueue = require('../src/priorityQueue');

qunit.module('queue');

qunit.test('Queue test', function(assert) {
  var queue = new Queue();

  assert.equal(queue.peek(), undefined, 'Empty peek test');

  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);

  assert.equal(queue.peek(), 1);
  assert.equal(queue.dequeue(), 1);
  assert.deepEqual(queue.elements, [2, 3]);
  assert.equal(queue.dequeue(), 2);
  assert.equal(queue.getRear(), 1);
  assert.equal(queue.dequeue(), 3);
  assert.deepEqual(queue.elements, []);
  assert.equal(queue.dequeue(), undefined);
  assert.equal(queue.peek(), undefined);
  assert.equal(queue.getRear(), 0);



  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);

  var q2 = new Queue();

  q2.enqueue(4);

});

qunit.test('Priority Queue test', function(assert) {
  var pqueue = new PriorityQueue();

  assert.equal(pqueue.maxPriority, 0, 'Empty max priority test');
  assert.equal(pqueue.isEmpty(), true);

  pqueue.enqueue('Bear', 10);
  assert.equal(pqueue.isEmpty(), false);
  assert.deepEqual(pqueue.storage[10], ['Bear']);
  pqueue.enqueue('Bird', 10);
  assert.equal(pqueue.maxPriority, 10);


  pqueue.enqueue('Bugs', 0);
  assert.equal(pqueue.maxPriority, 10);
  assert.deepEqual(pqueue.storage[0], ['Bugs']);
  assert.equal(pqueue.size(), 3);
  assert.deepEqual(pqueue.dequeue(0), 'Bugs');

  assert.equal(pqueue.size(10), 2);
  assert.equal(pqueue.size(0), undefined);

  assert.equal(pqueue.dequeue(0), undefined);
  assert.equal(pqueue.dequeue(-1), undefined);

  assert.equal(pqueue.enqueue('Bugs', -1), undefined);
});
