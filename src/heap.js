var BinaryTreeNode = require('./binaryTreeNode');

/**
 *
 * Create a heap
 *
 * @param {*} data
 *   The data of the node to be root
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
var Heap = function(data, compareFunc, type) {
  this._heapArray = [];
  this._compare = compareFunc;
  this._type = type === undefined ? 'MinHeap' : type;

  if(type != 'MinHeap' && type != 'MaxHeap') {
    console.warn('The type of the heap passed in does not exist. It must be either MinHeap or MaxHeap.');
  }

  if(Array.isArray(data)) {
    for(var i = 0; i < data.length; i++) {
      this.insert(data[i]);
    }
  } else {
      this._heapArray.push(data);
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
  if(this.isEmpty()) {
    this._heapArray.push(data);
  } else {
    this._heapArray.push(data);
    var i = this._heapArray.length - 1;

    if(this._type === 'MinHeap') {
      while(i > 0 && this._heapArray[_getParentIndex(i)] > this._heapArray[i]) {
        _swap.call(this, _getParentIndex(i), i);
        i = _getParentIndex(i);
      }
    } else if(this._type === 'MaxHeap') {
      while(i > 0 && this._heapArray[_getParentIndex(i)] < this._heapArray[i]) {
        _swap.call(this, _getParentIndex(i), i);
        i = _getParentIndex(i);
      }
    }
  }
};


/**
 *
 * Delete the root of the heap
 *
 * @return {*} data
 *   The root value to be deleted
 */
Heap.prototype.deleteRoot = function() {
  var root;
  if(this.isEmpty()) {
    return root;
  } else if(this._heapArray.length === 1) {
    root = this._heapArray[0];
    this.clear();
    return root;
  } else {
    root = this._heapArray.splice(0, 1);
    this.heapify(0);
    return root;
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
 * Heapify the subtree with a root at the given index
 * Assume the subtrees are already heapified
 *
 * @param {Number} [index=0]
 *   The index of the node starting from (zero-based)
 *
 */
Heap.prototype.heapify = function(index) {
  var left = _getLeftChildIndex(index);
  var right = _getRightChildIndex(index);
  var smallest = index;
  var biggest = index;

  if(this._type === 'MinHeap') {
    if(left < this._heapArray.length && this._heapArray[left] < this._heapArray[index]) {
      smallest = left;
    }
    if(right < this._heapArray.length && this._heapArray[right] < this._heapArray[smallest]) {
      smallest = right;
    }
    if(smallest != index) {
      _swap.call(this, smallest, index);
      this.heapify(smallest);
    }
  } else {
    if(left < this._heapArray.length && this._heapArray[left] > this._heapArray[index]) {
      biggest = left;
    }
    if(right < this._heapArray.length && this._heapArray[right] > this._heapArray[biggest]) {
      biggest = right;
    }
    if(biggest != index) {
      _swap.call(this, biggest, index);
      this.heapify(biggest);
    }
  }
};





/**
 *
 * Get the root value of the current heap
 *
 * @return {*}
 *   Boolean for whether the tree is empty or not
 */
Heap.prototype.getRoot = function() {
  if(this.isEmpty()){
    return undefined;
  } else {
    return this._heapArray[0];
  }
};



/**
 *
 * Check if the tree is empty
 *
 * @return {Boolean}
 *   Boolean for whether the tree is empty or not
 */
Heap.prototype.isEmpty = function() {
  if(this._heapArray.length === 0 ){
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
  this._heapArray.length = 0;
};


module.exports = Heap;
