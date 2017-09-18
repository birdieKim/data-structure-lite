/**
 *
 * Create a queue
 *
 * @param {*} [element]
 *   The element to be inserted to the queue
 */
var Queue = function(element) {
  this.elements = [];     // the array where elements are stored
  if (element) {
    this.elements.push(element);
  }
  this._front = 0;  // the index of where the element will be deleted
};

Queue.prototype = Object.create(require('./arrayData').prototype);
Queue.prototype.constructor = Queue;

var _eventCallbacks = {};
var _canvasObjects = [];

Queue.prototype.addEventListener = function(eventName, callback) {
  // prevent unkown eventName
  if (_eventCallbacks[eventName] === undefined) {
    _eventCallbacks[eventName] = [];
  }

  _eventCallbacks[eventName].push(callback);
};

Queue.prototype.removeEventListener = function(eventName, callback) {
  var index = _eventCallbacks[eventName].indexOf(callback);

  if (index !== -1) {
    _eventCallbacks[eventName].splice(index, 1);
  }
};

/**
 *
 * Insert an element to the end of the queue
 *
 * @param {*} element
 *   The element to be inserted
 *
 * @return {Number}
 *   New length of the queue after the insertion
 */
Queue.prototype.enqueue = function(element) {
  return this.elements.push(element);
};

/**
 *
 * Remove an element at the front of the queue
 *
 * @return {*}
 *   The element just removed from the queue
 *   If the queue is empty, return undefined
 */
Queue.prototype.dequeue = function() {
  if (!this.isEmpty()) {
    return this.elements.shift();
  } else {
    console.warn('The queue is empty.');
    return undefined;
  }
};

/**
 *
 * Get an element at the front of the queue without dequeueing
 *
 * @return {*}
 *   The element at the front of the queue
 *   If the queue is empty, return undefined
 */
Queue.prototype.peek = function() {
  if (!this.isEmpty()) {
    return this.elements[this._front];
  } else {
    console.warn('The queue is empty.');
    return undefined;
  }
};

/**
 *
 * Get the index of where an element will be inserted
 *
 * @return {Number}
 *   The index next to the last index of the queue
 *   If the queue is empty, return 0
 */
Queue.prototype.getRear = function() {
  var len = this.elements.length;
  return len < 0 ? 0 : len;
};

module.exports = Queue;
