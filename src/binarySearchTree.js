var BinaryTreeNode = require('./binaryTreeNode');

/**
 *
 * Create the binary search tree
 *
 * @param {*} data
 *   Data of the node to be root
 *
 * @param {Function} compareFunc
 *   A Function for comparing between the given data
 *   This function has two parameters for comparison
 *   Return the result of subtracting the second argument from the first argument
 *   Return 0, if the arguments are equal
 */
var BinarySearchTree = function(data, compareFunc) {
  var node = new BinaryTreeNode(data);
  this._root = node;
  this._maxChildrenNum = 2;
  this._compare = compareFunc;
};

var _returnArray = [];  // used for returning the array resulted from the traversal

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
 * @param {BinaryTreeNode} [node=this._root]
 *   The root node starting traversal from
 *
 * @return {Array|undefined}
 *   An array for nodes in order by the traversal
 *   Return undefined, if the traversal is neither 'Pre-order' nor 'In-order' nor 'Post-order'
 */
BinarySearchTree.prototype.traverse = function(traversal, node, level) {
  if(level === undefined) {
    level = 0;
    _returnArray.length = 0;
  }

  node = node === undefined ? this._root : node;

  if(node) {   // if the node exists
    if(traversal === 'Pre-order' || traversal === undefined) {
      _returnArray.push(node.data);
      this.traverse(traversal, node.left, level+1);
      this.traverse(traversal, node.right, level+1);

      return _returnArray;
    } else if(traversal === 'In-order') {
      this.traverse(traversal, node.left, level+1);
      _returnArray.push(node.data);
      this.traverse(traversal, node.right, level+1);

      return _returnArray;
    }  else if(traversal === 'Post-order') {
      this.traverse(traversal, node.left, level+1);
      this.traverse(traversal, node.right, level+1);
      _returnArray.push(node.data);

      return _returnArray;
    } else {
      console.warn('The traversal passed in does not exist.');
    }
  } else {
    return;
  }
};


/**
 *
 * Search the node with the given key value
 *
 * @param {*} data
 *   The data of the node you're searching for
 *
 * @param {BinaryTreeNode} [node=this._root]
 *   The root node starting traversal from
 *
 * @return {BinaryTreeNode|undefined}
 *   A binary tree node with the given data
 *   Return undefined, if the node with the given data does not exist in the tree
 */
BinarySearchTree.prototype.search = function(data, node) {
  node = node === undefined ? this._root : node;

  if(node) {
    if(this._compare(data, node.data) < 0) {
      this.search(data, node.left);
    } else if(this._compare(data, node.data) === 0) {
      return node;
    } else if(this._compare(data, node.data) > 0) {
      this.search(data, node.right);
    }
  } else {
    console.warn('Could not find the given node.');
    return node;
  }
};


/**
 *
 * Insert the node with the given data
 *
 * @param {*} data
 *   The data of the node to be inserted
 *
 * @param {BinaryTreeNode} [node=this._root]
 *   The root node starting traversal from
 *
 * @return {BinaryTreeNode|undefined}
 *   A binary tree node with the given data
 *   Return undefined, if the node with the given data does not exist in the tree
 */
BinarySearchTree.prototype.insert = function(data, node) {
  node = node === undefined ? this._root : node;

  if(node) {
    if(this._compare(data, node.data) < 0) {
      node.left = this.insert(data, node.left);
    } else if(this._compare(data, node.data) > 0) {
      node.right = this.insert(data, node.right);
    }
    return node;
  } else {
    return new BinaryTreeNode(data);
  }
};


/**
 *
 * Delete the node with the given data
 *
 * @param {*} data
 *   The data of the node to be deleted
 *
 * @param {BinaryTreeNode} [node=this._root]
 *   The root node starting traversal from
 *
 * @return {BinaryTreeNode|undefined}
 *   A binary tree node with the given data
 *   Return undefined, if the node with the given data does not exist in the tree
 */
BinarySearchTree.prototype.delete = function(data, node) {
  node = node === undefined ? this._root : node;

  if(node) {
    if(this._compare(data, node.data) < 0) {
      node.left = this.delete(data, node.left);
    } else if(this._compare(data, node.data) === 0) {
      if(node.left === null) {  // if the node has one right child or no child
        return node.right;
      } else if(node.right === null) {  // if the node has one left child
        return node.left;
      } else {  // if the node has two children
        var minNode = this.findMinNode(node.right);
        node.data = minNode.data;
        node.right = this.delete(minNode.data, node.right);
      }
    } else if(this._compare(data, node.data) > 0) {
      node.right = this.delete(data, node.right);
    }
    return node;
  } else {
    return node;
  }
};


/**
 *
 * Find the node with the minimum data
 *
 * @param {BinaryTreeNode} [node=this._root]
 *   The root node starting traversal from
 *
 * @return {BinaryTreeNode|undefined}
 *   A binary tree node with the minimum data
 *   Return undefined, if the node is undefined
 */
BinarySearchTree.prototype.findMinNode = function(node) {
  node = node === undefined ? this._root : node;

  if(node) {
    var currentNode = node;
    while(currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode;
  } else {
    return undefined;
  }
};

/**
 *
 * Find the node with the maximum data
 *
 * @param {BinaryTreeNode} [node=this._root]
 *   The root node starting traversal from
 *
 * @return {BinaryTreeNode|undefined}
 *   A binary tree node with the maximum data
 *   Return undefined, if the node is undefined
 */
BinarySearchTree.prototype.findMaxNode = function(node) {
  node = node === undefined ? this._root : node;

  if(node) {
    var currentNode = node;
    while(currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode;
  } else {
    return undefined;
  }
};


/**
 *
 * Check if the tree is empty
 *
 * @return {Boolean}
 *   Boolean for whether the tree is empty or not
 */
BinarySearchTree.prototype.isEmpty = function() {
  if(this._root === undefined ){
    return true;
  } else {
    return false;
  }
};


/**
 *
 * Make the tree empty
 *
 */
BinarySearchTree.prototype.clear = function() {
  this._root = undefined;
  _returnArray.length = 0;
};

module.exports = BinarySearchTree;
