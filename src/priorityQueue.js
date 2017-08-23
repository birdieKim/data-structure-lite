var PriorityQueue = function() {
  this.maxPriority = undefined;  // the max priority
};

PriorityQueue.prototype = Object.create(require('./arrayData').prototype);
PriorityQueue.prototype.constructor = PriorityQueue;

/**
 *
 * Insert an element to the queue with the position decided by its priority
 *
 * @param {*} element
 *   The element to be inserted
 * @param {Number} priority
 *   The priority of the element
 *
 *
 * @return
 *   Max priority value
 */
PriorityQueue.prototype.enqueue = function(element, priority) {
  if(this.elements.length === 0) {
    this.elements = {};
    this.elements[priority] = [element];
    this.maxPriority = priority;
  } else {
    if(elements[priority] === undefined) {
      this.elements[priority] = [element];
      this.updateMaxPriority(priority);
    } else {  //if there is an array with the same priority
      this.elements[priority].push(element);
    }
  }
};

/**
 *
 * Update the max priority value
 *
 * @param {Number|undefined} [priority]
 *   The priority to be compared with the current max priority value
 *
 * @return
 *   The max priority which is the result from comparing the current max with the given value
 */
PriorityQueue.prototype.updateMaxPriority = function(priority) {
  return priority > this.maxPriority ? priority : this.maxPriority;
};

/**
 *
 * Get the max priority value
 *
 * @return
 *   The max priority which is the result from searching the max value among the priorities
 */
PriorityQueue.prototype.getMaxPriority = function() {
  var keys = Object.keys(this.elements);
  return keys[keys.length - 1];
};

 /**
  *
  * Remove the first item of the array with the given priority the queue
  *
  * @param {Number|undefined} [priority]
  *   The priority of the items
  *
  * @return
  *   The item in the array with the given priority just removed from the queue
  */
 PriorityQueue.prototype.dequeue = function(priority) {
   if(priority === undefined) {
     return this.elements[this.maxPriority].pop();
     if (this.elements[this.maxPriority].length === 0) {
       this.maxPriority = this.getMaxPriority();
     }
   } else {
     return this.elements[priority].pop();
   }
 };
