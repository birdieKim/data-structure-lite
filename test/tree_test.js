var qunit = require('qunitjs');
var Tree = require('../src/tree');
var TreeNode = require('../src/treeNode');

qunit.module('tree');

qunit.test('Tree test', function(assert) {
  var equalFunc = function(a, b)  {
    if(a === b) {
      return true;
    } else {
      return false;
    }
  };

  var tree = new Tree('one', 2, equalFunc);
  var array = [];

  assert.equal(tree._root.data, 'one');

  tree._root.children.push(new TreeNode('two'));
  tree._root.children[0].parent = tree;

  tree._root.children.push(new TreeNode('three'));
  tree._root.children[1].parent = tree;

  tree._root.children.push(new TreeNode('four'));
  tree._root.children[2].parent = tree;

  tree._root.children[0].children.push(new TreeNode('five'));
  tree._root.children[0].children[0].parent = tree._root.children[0];

  tree._root.children[0].children.push(new TreeNode('six'));
  tree._root.children[0].children[1].parent = tree._root.children[0];

  tree._root.children[2].children.push(new TreeNode('seven'));
  tree._root.children[2].children[0].parent = tree._root.children[2];


  array = tree.traverse('BF', function(node){
    console.log(node.data);
  });
  assert.deepEqual(array, ['one', 'two', 'three', 'four', 'five', 'six', 'seven']);


  array = tree.traverse('DF', function(node){
    console.log(node.data);
  });
  assert.deepEqual(array, ['one', 'two', 'five', 'six', 'three', 'four', 'seven']);

  tree.insert('eight', 'three', 'BF');
  array = tree.traverse('BF');
  assert.deepEqual(array, ['one', 'two', 'three', 'four', 'five', 'six', 'eight', 'seven']);

  tree.delete('eight', 'three', 'BF');
  array = tree.traverse('BF');
  assert.deepEqual(array, ['one', 'two', 'three', 'four', 'five', 'six', 'seven']);

  tree.addToRoot('zero');
  assert.equal(tree._root.data, 'zero');
  array = tree.traverse('BF');
  assert.deepEqual(array, ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven']);

  tree.insert('eight', 'one', 'BF');
  array = tree.traverse('DF');
  assert.deepEqual(array, ['zero', 'one', 'two', 'five', 'six', 'three', 'four', 'seven']);

  tree.clear();
  assert.equal(tree.isEmpty(), true);


});
