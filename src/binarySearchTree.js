var BinaryTreeNode = require('./binaryTreeNode');
var Queue = require('./queue');
var Stack = require('./stack');

/**
 *
 * Create the binary search tree
 *
 * @param {*} data
 *   Data of the node to be root
 *
 * @param {Function} equalFunc
 *   A Function for checking equality of the data
 *   This function has a node for comparison as parameters
 */
var BinarySearchTree = function(data, equalFunc) {
  var node = new BinaryTreeNode(data);
  this._root = node;
  this._maxChildrenNum = 2;
  this._equal = equalFunc;
};

var returnArray = [];

/**
 *
 * Traverse the tree nodes
 *
 * @param {String} traversal
 *   There are 3 options:
 *      "Pre-order" - The traversal order is root-left-right (default)
 *      "In-order" - The traversal order is left-root-right
 *      "Post-order" - The traversal order is left-right-root
 *
 * @param {BinaryTreeNode} node
 *   The node starting traversal from
 *
 * @return {Array|undefined}
 *   An array for nodes in order by the traversal
 *   Return undefined, if the traversal is neither 'Pre-order' nor 'In-order' nor 'Post-order'
 */
BinarySearchTree.prototype.traverse = function(traversal, node) {
  if(node) {   // if the node exists
    if(traversal === 'Pre-order' || traversal === undefined) {
      returnArray.push(node.data);

      if(node === null) {
        return;
      }

      this.traverse(traversal, node.left);
      this.traverse(traversal, node.right);

      return returnArray;
    } else if(traversal === 'In-order') {
      if(node === null) {
        return;
      }

      this.traverse(traversal, node.left);
      returnArray.push(node.data);
      this.traverse(traversal, node.right);

      return returnArray;
    }  else if(traversal === 'Post-order') {

      if(node === null) {
        return;
      }

      this.traverse(traversal, node.left);
      this.traverse(traversal, node.right);
      returnArray.push(node.data);

      return returnArray;
    } else {
      console.warn('The traversal passed in does not exist.');
    }
  }
};


/**
 *
 * Traverse the tree nodes
 *
 * @param {*} key
 *   The node starting traversal from
 *
 * @return {BinaryTreeNode|undefined}
 *   A binary tree node with the given key value
 *   Return undefined, if the key does not exist in the tree
 */
BinarySearchTree.prototype.search = function(key) {
  if(this._root === undefined || this._equal(this._root.data, key)) {
    return this._root;
  } else {
    
  }
};


module.exports = BinarySearchTree;
