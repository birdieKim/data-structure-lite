var Queue = function() {
  this.front = 0;  // the index of where the element will be deleted
};

Queue.prototype = Object.create(require('./arrayData').prototype);
Queue.prototype.constructor = Queue;

/**
 *
 * Insert an element to the end of the queue
 *
 * @param {Any} element
 *   The element to be inserted
 *
 * @fires push
 *
 * @return
 *   New length of the queue after the insertion
 */
Queue.prototype.enqueue = function(element) {
  this.elements.push(element);
};

/**
 *
 * Remove an element at the front of the queue
 *
 * @fires shift
 *
 * @return
 *   The element just removed from the queue
 */
Queue.prototype.dequeue = function() {
  return this.elements.shift();
};

/**
 *
 * Get an element at the front of the queue without dequeueing
 *
 * @return
 *   The element at the front of the queue
 */
Queue.prototype.peek = function() {
  return this.elements[this.front];
};

/**
 *
 * Set the index of where an element will be inserted
 *
 * @return
 *   The index next to the last index of the queue
 */
Queue.prototype.rear = function() {
  var len = this.elements.length;
  return len < 0 ? 0 : len;
};


module.exports = Queue;
