var PriorityQueue = function() {
  this.storage = {};     // JSON format storage (key: value --> priority: element)
  this.maxPriority = 0;  // the max priority - Larger numbers indicate higher priority
};

var _eventCallbacks = {};
var _canvasObjects = [];

PriorityQueue.prototype.addEventListener = function(eventName, callback) {
  // prevent unkown eventName
  if (_eventCallbacks[eventName] === undefined) {
    _eventCallbacks[eventName] = [];
  }

  _eventCallbacks[eventName].push(callback);
};

PriorityQueue.prototype.removeEventListener = function(eventName, callback) {
  var index = _eventCallbacks[eventName].indexOf(callback);

  if (index !== -1) {
    _eventCallbacks[eventName].splice(index, 1);
  }
};

/**
 *
 * Insert an element to the queue with the position decided by its priority
 *
 * @param {*} element
 *   The element to be inserted
 *
 * @param {Number} priority
 *   The priority of the element
 *   Larger numbers indicate higher priority
 *
 * @return {Number}
 *   Max priority value
 *   Return undefined if the priority is not a natural number (including 0)
 */
PriorityQueue.prototype.enqueue = function(element, priority) {
  if (priority >= 0) {
    if (this.isEmpty()) {
      this.storage[priority] = [element];
      this.maxPriority = priority;
    } else {
      if (this.storage[priority] === undefined) {
        this.storage[priority] = [element];
        _updateMaxPriority(priority);
      } else {  //if there is an array with the same priority
        this.storage[priority].push(element);
      }
    }
    return this.maxPriority;
  } else {
    console.warn('The priority for the element is not a natural number.');
    return undefined;
  }
};

/**
 *
 * Update the max priority value
 *
 * @param {Number|undefined} priority
 *   The priority to be compared with the current max priority value
 *
 * @return {Number}
 *   The max priority which is the result from comparing the current max with the given value
 */
function _updateMaxPriority(priority) {
  return priority > this.maxPriority ? priority : this.maxPriority;
};

/**
 *
 * Get the max priority value
 *
 * @return {Number|undefined}
 *   The max priority which is the result from searching the max value among the priorities
 *   If there is no element in the storage, return undefined
 */
PriorityQueue.prototype.getMaxPriority = function() {
  if (!this.isEmpty()) {
    var keys = Object.keys(this.storage);
    return keys[keys.length - 1];
  } else {
    console.warn('The queue is empty. Cannot get the max priority in the queue.'); // jscs:disable
    return undefined;
  }
};

/**
 *
 * Remove the first item of the array with the given priority the queue
 *
 * @param {Number|undefined} [priority]
 *   The priority of the items
 *
 * @return {*}
 *   The item in the array with the given priority just removed from the queue
 *   If there is no given priority, return the element which is in the highest priority
 *   Return undefined if the priority is not a natural number (including 0)
 */
PriorityQueue.prototype.dequeue = function(priority) {
  if (!this.isEmpty() && this.storage[priority] != undefined && priority >= 0) {
    var element;
    if (priority === undefined) {
      element =  this.storage[this.maxPriority].pop();
      if (this.storage[this.maxPriority].length === 0) {
        delete this.storage[this.maxPriority];
        this.maxPriority = this.getMaxPriority();
      }
    } else {
      element = this.storage[priority].pop();
      if (this.storage[priority].length === 0) {
        delete this.storage[priority];
        this.maxPriority = this.getMaxPriority();
      }
    }
    return element;
  } else {
    console.warn('The queue is empty or the priority passed in does not exist in the queue.');
    return undefined;
  }
};

/**
 *
 * Check if the queue is empty
 *
 * @return {Boolean}
 *   Boolean for whether the storage is empty or not
 */
PriorityQueue.prototype.isEmpty = function() {
  return Object.keys(this.storage).length === 0 ? true : false;
};

/**
 *
 * Get size of the storage
 *
 * @param {Number|undefined} [priority]
 *   The priority of the items
 *
 * @return {Number|undefined}
 *   The size of the storage or the size of the array with the given priority
 *   If there is no given priority, return a whole size of the storage
 *   Return undefined if the priority is not a natural number (including 0)
 */
PriorityQueue.prototype.size = function(priority) {
  if (priority === undefined) {
    var len = Object.keys(this.storage).length;
    var size = 0;
    for (var i = 0; i < len; i++) {
      size += this.storage[Object.keys(this.storage)[i]].length;
    }
    return size;
  } else {
    if (priority >= 0 && this.storage[priority] != undefined) {
      return this.storage[priority].length;
    }
  }
};

module.exports = PriorityQueue;
