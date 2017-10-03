var qunit = require('qunitjs');
var BinarySearchTree = require('../binarySearchTree');
var BinaryTreeNode = require('../binaryTreeNode');

qunit.module('binary search tree');

qunit.test('Binary Search Tree test', function(assert) {

  var tree = new BinarySearchTree(10);

  assert.equal(tree._root.data, 10);

  tree._root.left = new BinaryTreeNode(5);
  tree._root.right = new BinaryTreeNode(20);

  tree._root.right.left = new BinaryTreeNode(15);

  tree._root.left.right = new BinaryTreeNode(7);

  tree._root.right.right = new BinaryTreeNode(25);

  assert.deepEqual(tree.traverse('In-order'), [5, 7, 10, 15, 20, 25]);

  var listener = function(e) {
    assert.equal(e.data.data, 3);
    assert.equal(e.triggeredBy, 'insert');
  };
  tree.addEventListener('change', listener);
  assert.equal(tree.insert(3).data, 3);
  tree.removeEventListener('change', listener);

  listener = function(e) {
    assert.equal(e.data.data, tree._root.data);
    assert.equal(e.triggeredBy, 'delete');
  };
  tree.addEventListener('change', listener);
  tree.delete(10);
  tree.removeEventListener('change', listener);

  assert.equal(tree.delete(50), undefined);

  assert.deepEqual(tree.traverse('Pre-order'), [15, 5, 3, 7, 20, 25]);
  assert.deepEqual(tree.traverse('order'), [15, 5, 3, 7, 20, 25]);
  assert.equal(tree.delete(0), undefined);

  assert.equal(tree.search(15).data, 15);
  assert.equal(tree.search(50), undefined);

  assert.deepEqual(tree.traverse('Post-order'), [3, 7, 5, 25, 20, 15]);

  assert.equal(tree.findMinNode().data, 3);
  assert.equal(tree.findMaxNode().data, 25);

  listener = function(e) {
    assert.equal(e.data, undefined);
    assert.equal(e.triggeredBy, 'clear');
  };
  tree.addEventListener('change', listener);
  tree.clear();
  tree.removeEventListener('change', listener);

  assert.equal(tree.isEmpty(), true);
  assert.equal(tree._root, undefined);
  assert.equal(tree.traverse('Pre-order'), undefined);
  tree.delete(0);
  assert.equal(tree.search(10), undefined);
  assert.equal(tree.findMinNode(), undefined);
  assert.equal(tree.findMaxNode(), undefined);
  assert.equal(tree.insert(100).data, 100);

  tree = new BinarySearchTree(350);
  tree.delete(350);
  assert.equal(tree.isEmpty(), true);

});
