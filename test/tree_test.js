var qunit = require('qunitjs');
var Tree = require('../tree');
var TreeNode = require('../treeNode');

qunit.module('tree');

qunit.test('Tree test', function(assert) {
  var equalFunc = function(a, b)  {
    if (a === b) {
      return true;
    } else {
      return false;
    }
  };

  var tree = new Tree('one', 2, equalFunc);
  var array = [];

  assert.equal(tree._root.data, 'one');

  tree._root.children.push(new TreeNode('two'));
  tree._root.children[0].parent = tree._root;

  tree._root.children.push(new TreeNode('three'));
  tree._root.children[1].parent = tree._root;

  tree._root.children.push(new TreeNode('four'));
  tree._root.children[2].parent = tree._root;

  tree._root.children[0].children.push(new TreeNode('five'));
  tree._root.children[0].children[0].parent = tree._root.children[0];

  tree._root.children[0].children.push(new TreeNode('six'));
  tree._root.children[0].children[1].parent = tree._root.children[0];

  tree._root.children[2].children.push(new TreeNode('seven'));
  tree._root.children[2].children[0].parent = tree._root.children[2];

  array = tree.traverse('BF', function(node) {
    console.log(node.data);
  });

  assert.deepEqual(array, ['one', 'two', 'three', 'four', 'five', 'six', 'seven']); // jscs:disable

  array = tree.traverse('DF', function(node) {});
  assert.deepEqual(array, ['one', 'two', 'five', 'six', 'three', 'four', 'seven']); // jscs:disable

  assert.equal(tree.insert('eight', 'three', 'BF').data, 'eight');
  array = tree.traverse('BF');
  assert.deepEqual(array, ['one', 'two', 'three', 'four', 'five', 'six', 'eight', 'seven']); // jscs:disable

  assert.equal(tree.delete('eight', 'ten', 'BF'), undefined);
  assert.equal(tree.delete('eight', 'three', 'BF').data, 'eight');
  array = tree.traverse('BF');
  assert.deepEqual(array, ['one', 'two', 'three', 'four', 'five', 'six', 'seven']); // jscs:disable

  tree.addToRoot('zero');
  assert.equal(tree._root.data, 'zero');
  array = tree.traverse('BF');
  assert.deepEqual(array, ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven']); // jscs:disable

  assert.equal(tree.insert('eight', 'one', 'BF'), undefined);

  array = tree.traverse('DF');
  assert.deepEqual(array, ['zero', 'one', 'two', 'five', 'six', 'three', 'four', 'seven']);

  tree.clear();
  assert.equal(tree.isEmpty(), true);

});
