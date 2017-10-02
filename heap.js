/**
 *
 * Create a heap
 *
 * @param {*} data
 *   The data of the node to be root
 *
 * @param {Function} [compareFunc]
 *   A Function for comparing between the given data
 *   This function has two parameters for comparison
 *   Return the result of subtracting the second argument from the first argument
 *   Return 0, if the arguments are equal
 *
 * @param {String} [type='MinHeap']
 *   There are 2 options for the type of heap:
 *      'MinHeap'
 *      'MaxHeap'
 */
var Heap = function(data, compareFunc, type) {
  this._heapArray = [];
  this._compare = compareFunc === undefined ? function(a, b) {
    return a - b;
  } : compareFunc;
  this._type = type === undefined ? 'MinHeap' : type;

  if (this._type !== 'MinHeap' && this._type !== 'MaxHeap') {
    console.warn('The type of the heap passed in does not exist. Proceed with MinHeap as a default.'); //jscs:disable
    this._type = 'MinHeap';
  }

  if (Array.isArray(data)) {   // if the data is array, create a heap with inserting each element in the array
    for (var i = 0; i < data.length; i++) {
      this.insert(data[i]);
    }
  } else if (data !== undefined){
    this._heapArray.push(data);
  }

};

var _eventCallbacks = {};
var _canvasObjects = [];

Heap.prototype.addEventListener = function(eventName, callback) {
  // prevent unkown eventName
  if (_eventCallbacks[eventName] === undefined) {
    _eventCallbacks[eventName] = [];
  }

  _eventCallbacks[eventName].push(callback);
};

Heap.prototype.removeEventListener = function(eventName, callback) {
  var index = _eventCallbacks[eventName].indexOf(callback);

  if (index !== -1) {
    _eventCallbacks[eventName].splice(index, 1);
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
  if (this.isEmpty()) {
    this._heapArray.push(data);
    if (_eventCallbacks.hasOwnProperty('change')) {
       _eventCallbacks.change.forEach(function(callback) {
         callback({data: data, index: 0, triggeredBy: 'insert'});
       });
     }
  } else {
    this._heapArray.push(data);
    var i = this._heapArray.length - 1;

    if (_eventCallbacks.hasOwnProperty('change')) {
       _eventCallbacks.change.forEach(function(callback) {
         callback({data: data, index: i, triggeredBy: 'insert'});
       });
     }

    if (this._type === 'MinHeap') {
      while (i > 0 && this._compare(this._heapArray[_getParentIndex(i)], this._heapArray[i]) > 0) { // jscs:disable
        _swap.call(this, _getParentIndex(i), i);
        var callbackData = this._heapArray[i];

        if (_eventCallbacks.hasOwnProperty('change')) {
           _eventCallbacks.change.forEach(function(callback) {
             callback({data: callbackData, index: i, triggeredBy: 'insert'});
           });
         }
        i = _getParentIndex(i);
      }
    } else if (this._type === 'MaxHeap') {
      while (i > 0 && this._compare(this._heapArray[_getParentIndex(i)], this._heapArray[i]) < 0) { // jscs:disable
        _swap.call(this, _getParentIndex(i), i);
        var callbackData = this._heapArray[i];

        if (_eventCallbacks.hasOwnProperty('change')) {
           _eventCallbacks.change.forEach(function(callback) {
             callback({data: callbackData, index: i, triggeredBy: 'insert'});
           });
         }
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
  if (this._heapArray.length === 1) {
    root = this._heapArray[0];
    this.clear();
  } else if (!this.isEmpty()) {
    root = this._heapArray.splice(0, 1);
    this.heapify(0);
  }

  if (_eventCallbacks.hasOwnProperty('change')) {
     _eventCallbacks.change.forEach(function(callback) {
       callback({data: root, index: 0, triggeredBy: 'deleteRoot'});
     });
   }

  return root;
};

/**
 *
 * Swap the two nodes in the heap array
 *
 * @param {Number} i
 *   The index of the node in the heap array to be swaped
 *
 * @param {Number} j
 *   The index of the node in the heap array to be swaped
 */
function _swap(i, j) {
    var temp = this._heapArray[i];
    this._heapArray[i] = this._heapArray[j];
    this._heapArray[j] = temp;
}

/**
 *
 * Get index of the parent in the heap array
 *
 * @param {Number} index
 *   The index of the node in the heap array
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

  if (this._type === 'MinHeap') {
    if (left < this._heapArray.length && this._compare(this._heapArray[left], this._heapArray[index]) < 0) {
      smallest = left;
    }
    if (right < this._heapArray.length && this._compare(this._heapArray[right], this._heapArray[smallest]) < 0) {
      smallest = right;
    }
    if (smallest != index) {
      _swap.call(this, smallest, index);
      this.heapify(smallest);
    }
  } else {
    if (left < this._heapArray.length && this._compare(this._heapArray[left], this._heapArray[index]) > 0) {
      biggest = left;
    }
    if (right < this._heapArray.length && this._compare(this._heapArray[right], this._heapArray[biggest]) > 0) {
      biggest = right;
    }
    if (biggest != index) {
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
 *   The data of the root
 *   If the heap is empty, return undefined
 */
Heap.prototype.getRoot = function() {
  if (this.isEmpty()) {
    return undefined;
  } else {
    return this._heapArray[0];
  }
};

/**
 *
 * Check if the heap is empty
 *
 * @return {Boolean}
 *   Boolean for whether the heap is empty or not
 */
Heap.prototype.isEmpty = function() {
  if (this._heapArray.length === 0) {
    return true;
  } else {
    return false;
  }
};

/**
 *
 * Make the heap empty
 *
 */
Heap.prototype.clear = function() {
  this._heapArray.length = 0;

  if (_eventCallbacks.hasOwnProperty('change')) {
     _eventCallbacks.change.forEach(function(callback) {
       callback({data: undefined, index: 0, triggeredBy: 'clear'});
     });
   }
};

module.exports = Heap;
