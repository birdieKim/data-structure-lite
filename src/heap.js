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
 *
 * @param {String} type
 *   There are 2 options for the type of heap:
 *      'MinHeap'
 *      'MaxHeap'
 */
 // 처음에 data가 아니라 array를 받아서 heap을 만들어야 할지?
var Heap = function(data, compareFunc, type) {
  if(Array.isArray(data)) {
    this._heapArray = data;
    this.heapify(type);
  } else {
      var node = new BinaryTreeNode(data);
      this._root = node;
      this._heapArray = [node.data];
  }

  this._compare = compareFunc;
  if(type != 'MinHeap' && type != 'MaxHeap') {
    console.warn('The type of the heap passed in does not exist. It must be either MinHeap or MaxHeap.');
  } else {
    this._type = type === undefined ? 'MinHeap' : type;
  }
};



/**
 *
 * Insert the node with the given data
 *
 * @param {*} data
 *   The data of the node to be inserted   
 */
Heap.prototype.insert = function(data) {
  var node = BinaryTreeNode(data);
  if(this.isEmpty()) {
    this._heapArray.push(data);
    this._root = node;
  } else {
    this._heapArray.push(data);
    var i = this._heapArray.length - 1;
    if(this._type === 'MinHeap') {
      while(i > 0 && this._heapArray[_getParentIndex(i)].data < this._heapArray[i].data) {
        _swap(this._heapArray[_getParentIndex(i)], this._heapArray[_getParentIndex(j)]);
        i = _getParentIndex(i);
      }
    } else if(this._type === 'MaxHeap') {
      while(i > 0 && this._heapArray[_getParentIndex(i)].data > this._heapArray[i].data) {
        _swap(this._heapArray[_getParentIndex(i)], this._heapArray[_getParentIndex(j)]);
        i = _getParentIndex(i);
      }
    }
  }
};


/**
 *
 * Swap the two nodes in the heap array
 *
 * @param {Number} index
 *   The data of the node to be swaped
 *
 * @param {Number} index
 *   The data of the node to be swaped
 */
function _swap(i, j) {
  if(this._heapArray[i] === undefined) {
    console.warn('The heap array does not have a value with the given index as a first parameter.');
  } else if(this._heapArray[j] === undefined) {
    console.warn('The heap array does not have a value with the given index as a second parameter.');
  } else {
    var temp = this._heapArray[i];
    this._heapArray[i] = this._heapArray[j];
    this._heapArray[j] = temp;
  }

}


/**
 *
 * Get index of the parent in the heap array
 *
 * @param {Number} index
 *   The data of the node to be inserted
 *
 * @return {Number}
 *   Return the index of the parent in the heap array
 */
function _getParentIndex(index) {
  return Math.ceil((index - 1) / 2);
}

/**
 *
 * Get index of the left child node in the heap array
 *
 * @param {Number} index
 *   The index of the node in the heap array
 *
 * @return {Number}
 *   Return the index of the left child node in the heap array
 */
function _getLeftChildIndex(index) {
  return index * 2 + 1;
}

/**
 *
 * Get index of the right child node in the heap array
 *
 * @param {Number} index
 *   The index of the node in the heap array
 *
 * @return {Number}
 *   Return the index of the right child node in the heap array
 */
function _getRightChildIndex(index) {
  return index * 2 + 2;
}


/**
 *
 * Insert the node with the given data
 *
 * @param {String} [type='MinHeap']
 *   There are 2 options for the type of heap:
 *      'MinHeap'
 *      'MaxHeap'
 *
 * @param {Number} [index=1]
 *   The index of the node starting from (one-based)
 *
 */
Heap.prototype.heapify = function(index) {

};




/**
 *
 * Check if the tree is empty
 *
 * @return {Boolean}
 *   Boolean for whether the tree is empty or not
 */
Heap.prototype.isEmpty = function() {
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
Heap.prototype.clear = function() {
  this._root = undefined;
  _returnArray.length = 0;
};


module.exports = Heap;
