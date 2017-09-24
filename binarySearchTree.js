var BinaryTreeNode = require('./binaryTreeNode');

/**
 *
 * Create a binary search tree
 *
 * @param {*} data
 *   Data of the node to be root
 *
 * @param {Function} [compareFunc]
 *   A Function for comparing between the given data
 *   This function has two parameters for comparison
 *   Return the result of subtracting the second argument from the first argument
 *   Return 0, if the arguments are equal
 */
var BinarySearchTree = function(data, compareFunc) {
  var node = new BinaryTreeNode(data);
  this._root = node;
  this._compare = compareFunc === undefined ? function(a, b) {
    return a - b;
  } : compareFunc;
};

var _eventCallbacks = {};
var _canvasObjects = [];

BinarySearchTree.prototype.addEventListener = function(eventName, callback) {
  // prevent unkown eventName
  if (_eventCallbacks[eventName] === undefined) {
    _eventCallbacks[eventName] = [];
  }

  _eventCallbacks[eventName].push(callback);
};

BinarySearchTree.prototype.removeEventListener = function(eventName, callback) {
  var index = _eventCallbacks[eventName].indexOf(callback);

  if (index !== -1) {
    _eventCallbacks[eventName].splice(index, 1);
  }
};

// used for returning the array resulted from the traversal
var _returnArray = [];

/**
 *
 * Traverse the tree nodes
 *
 * @param {String} [traversal='Pre-order']
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
  if (level === undefined) {
    level = 0;
    _returnArray.length = 0;
    node = node === undefined ? this._root : node;
  }

  node = node === undefined ? null : node;

  if (node) {   // if the node exists
    if (!~['Pre-order', 'In-order', 'Post-order'].indexOf(traversal)) {
      console.warn('The traversal passed in does not exist. Proceed with "Pre-order" as a default.'); //jscs:disable
      traversal = 'Pre-order';
    }

    if (traversal === 'Pre-order' || traversal === undefined) {
      _returnArray.push(node.data);
      this.traverse(traversal, node.left, level + 1);
      this.traverse(traversal, node.right, level + 1);

      return _returnArray;
    } else if (traversal === 'In-order') {
      this.traverse(traversal, node.left, level + 1);
      _returnArray.push(node.data);
      this.traverse(traversal, node.right, level + 1);

      return _returnArray;
    }  else if (traversal === 'Post-order') {
      this.traverse(traversal, node.left, level + 1);
      this.traverse(traversal, node.right, level + 1);
      _returnArray.push(node.data);

      return _returnArray;
    } else {
      return undefined;
    }
  } else {
    return undefined;
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
BinarySearchTree.prototype.search = function(data, node, level) {
  if (level === undefined) {
    level = 0;
    node = node === undefined ? this._root : node;
  }

  node = node === undefined ? null : node;

  if (node) {
    if (this._compare(data, node.data) < 0) {
      this.search(data, node.left, level + 1);
    } else if (this._compare(data, node.data) === 0) {
      return node;
    } else if (this._compare(data, node.data) > 0) {
      this.search(data, node.right, level + 1);
    }
  } else {
    console.warn('Cannot search a node with the given data.');
    return undefined;
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
 * @return {BinaryTreeNode}
 *   A binary tree node with the given data
 */
BinarySearchTree.prototype.insert = function(data, node, level) {
  if (level === undefined) {
    level = 0;
    node = node === undefined ? this._root : node;
  }

  node = node === undefined ? null : node;

  if (node) {
    if (this._compare(data, node.data) < 0) {
      node.left = this.insert(data, node.left, level + 1);
    } else if (this._compare(data, node.data) > 0) {
      node.right = this.insert(data, node.right, level + 1);
    }

    return node;
  } else {
    var newNode = new BinaryTreeNode(data);
    return newNode;
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
 * @return {BinaryTreeNode|undefined|null}
 *   The given binary tree node node
 *   Return undefined, if the node with the given data does not exist in the tree
 */
BinarySearchTree.prototype.delete = function(data, node, isFound, level) {
  if (isFound === undefined) {
    isFound = false;
    node = node === undefined ? this._root : node;
  }

  level = level === undefined ? 0 : level;

  node = node === undefined ? null : node;

  if (node) {
    if (this._compare(data, node.data) < 0) {
      node.left = this.delete(data, node.left, false, level + 1);
    } else if (this._compare(data, node.data) === 0) {
      isFound = true;
      if (node.left === null) {  // if the node has one right child or no child
        return node.right;
      } else if (node.right === null) {  // if the node has one left child
        return node.left;
      } else {  // if the node has two children
        var minNode = this.findMinNode(node.right);
        node.data = minNode.data;
        node.right = this.delete(minNode.data, node.right, true, level + 1);
      }
    } else if (this._compare(data, node.data) > 0) {
      node.right = this.delete(data, node.right, false, level + 1);
    }
    if (!isFound && level === 0) {
      console.warn('Cannot find a node with the given data.');
      return undefined;
    }

    return node;

  } else {
    return null;
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

  if (node) {
    var currentNode = node;
    while (currentNode.left) {
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

  if (node) {
    var currentNode = node;
    while (currentNode.right) {
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
  if (this._root === undefined) {
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
