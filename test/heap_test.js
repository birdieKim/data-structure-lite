var qunit = require('qunitjs');
var Heap = require('../src/heap');
var BinaryTreeNode = require('../src/binaryTreeNode');

qunit.module('heap');

qunit.test('Heap test', function(assert) {

  var compareFunc = function(a, b) {
      return a-b;
  }
  var heap = new Heap(10, compareFunc, 'MaxHeap');

  assert.equal(heap.getRoot(), 10);
  assert.equal(heap._type, 'MaxHeap');
  heap.insert(30);
  assert.deepEqual(heap._heapArray, [30, 10]);


  heap = new Heap([50, 40, 30, 20, 10], compareFunc);

  assert.equal(heap.getRoot(), 10);
  assert.equal(heap._type, 'MinHeap');
  assert.equal(heap.deleteRoot(), 10);
  assert.deepEqual(heap._heapArray, [20, 30, 40, 50]);


  heap = new Heap([100, 80, 70, 120, 50], compareFunc, 'MaxHeap');
  assert.deepEqual(heap._heapArray, [120, 100, 70, 80, 50]);
  assert.equal(heap.deleteRoot(), 120);
  assert.equal(heap.getRoot(), 100);
  assert.equal(heap.isEmpty(), false);
  heap.clear();
  assert.equal(heap.getRoot(), undefined);
  assert.equal(heap.isEmpty(), true);


});
