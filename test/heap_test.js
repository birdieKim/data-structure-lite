var qunit = require('qunitjs');
var Heap = require('../heap');
var BinaryTreeNode = require('../binaryTreeNode');

qunit.module('heap');

qunit.test('Heap test', function(assert) {

  var heap = new Heap(10, undefined, 'MaxHeap');

  assert.equal(heap.getRoot(), 10);
  assert.equal(heap._type, 'MaxHeap');

  var listener = function(e) {
    assert.equal(e.data, 30);
    assert.equal(e.triggeredBy, 'insert');
  };
  heap.addEventListener('change', listener);
  heap.insert(30);
  heap.removeEventListener('change', listener);

  assert.deepEqual(heap._heapArray, [30, 10]);

  heap = new Heap([50, 40, 30, 20, 10]);

  assert.equal(heap.getRoot(), 10);
  assert.equal(heap._type, 'MinHeap');

  listener = function(e) {
    assert.equal(e.data, 10);
    assert.equal(e.index, 0);
    assert.equal(e.triggeredBy, 'deleteRoot');
  };
  heap.addEventListener('change', listener);
  assert.equal(heap.deleteRoot(), 10);
  heap.removeEventListener('change', listener);

  assert.deepEqual(heap._heapArray, [20, 30, 40, 50]);

  heap = new Heap([100, 80, 70, 120, 50], undefined, 'MaxHeap');
  assert.deepEqual(heap._heapArray, [120, 100, 70, 80, 50]);
  assert.equal(heap.deleteRoot(), 120);
  assert.equal(heap.getRoot(), 100);
  assert.equal(heap.isEmpty(), false);

  listener = function(e) {
    assert.equal(e.data, undefined);
    assert.equal(e.index, 0);
    assert.equal(e.triggeredBy, 'clear');
  };
  heap.addEventListener('change', listener);
  heap.clear();
  heap.removeEventListener('change', listener);

  assert.equal(heap.getRoot(), undefined);
  assert.equal(heap.isEmpty(), true);

});
