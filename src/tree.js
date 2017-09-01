var TreeNode = require('./treeNode');
var Queue = require('./queue');
var Stack = require('./stack');

/**
 *
 * Create the tree
 *
 * @param {*} data
 *   Data of the node to be root
 *
 * @param {Number} num
 *   The maximum number of children that a node can hold
 *
 * @param {Function} equalFunc
 *   A Function for checking equality of the data
 *   This function has a node for comparison as parameters
 */
var Tree = function(data, num, equalFunc) {
  var node = new TreeNode(data);
  this._root = node;
  this._maxChildrenNum = num;
  this._equal = equalFunc;
};



/**
 *
 * Traverse the tree nodes
 *
 * @param {String} traversal
 *   There are 2 options:
 *      "BF" - Breadth-first search
 *      "DF" - Depth-first search in pre-order traversal
 * @param {Function} func
 *   A function invoked during traversal
 *   This function has a node as a parameter
 *   If the function returns true, traverse will stop
 *
 * @return {Array|undefined}
 *   An array for nodes in order by the traversal
 *   Return undefined, if the traversal is neither 'BF' nor 'DF'
 */
Tree.prototype.traverse = function(traversal, func) {
  var order = []; // an array for nodes in order by the traversal
  if(traversal === 'BF') {
    var queue = new Queue();

    queue.enqueue(this._root);

    while(!queue.isEmpty()) {

      var currentNode = queue.dequeue();

      for(var i = 0; i < currentNode.children.length; i++) {
        queue.enqueue(currentNode.children[i]);
      }

      order.push(currentNode);

      if(func) {
        if (func.call(this, currentNode)) {
          break;
        }
      }
    }

    return order;
  } else if(traversal === 'DF') {
    var stack = new Stack();
    stack.push(this._root);

    while(!stack.isEmpty()) {
      var currentNode = stack.pop();
      for(var i = currentNode.children.length-1; i >= 0; i--) {
        stack.push(currentNode.children[i]);
      }

      order.push(currentNode);

      if(func){
        if (func.call(this, currentNode)) {
          break;
        }
      }
    }

    return order;
  } else {
    throw new Error('The traversal passed in does not exist.');
  }
};


/**
 *
 * Insert a node to the given parent node
 * It inserts a node with the given data to the first found parent node with the given parent data
 *
 * @param {*} data
 *   The data of the node to be inserted
 *
 * @param {*} parentData
 *   The data of the node which will be a parent of the inserted node
 *
 * @param {String} traversal
 *   There are 2 options:
 *      "BF" - Breadth-first search
 *      "DF" - Depth-first search in pre-order traversal
 *   If this parameter is undefined, the traversal will be 'BF' as a default
 */
Tree.prototype.insert = function(data, parentData, traversal) {
  var child = new TreeNode(data);
  var parent;

  this.traverse(traversal, _findParent);

  if(parent) {
    parent.children.push(child);
    child.parent = parent;
  } else {

  }

  function _findParent(currentNode) {
    if(this._equal(parentData, currentNode.data)) {
      parent = currentNode;
      return true;
    }
  }
};









module.exports = Tree;
