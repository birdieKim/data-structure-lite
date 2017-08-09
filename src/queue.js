var Queue = function() {
  this.elements = [];  // the array where elements are stored
  this.front = 0;  // the index of where the element will be deleted
};

/*
 * @function - enqueue
 *
 * @Param {Any} element - to push
 * @Return {Any} - The element being poped
 */
Queue.prototype.enqueue = function(element) {
  this.elements.push(element);
};

Queue.prototype.dequeue = function() {
  return this.elements.shift();
};

Queue.prototype.peek = function() {
  return this.elements[this.front];
};

Queue.prototype.rear = function() {
  var len = this.elements.length - 1;
  
  return len < 0 ? 0 : len;
};

module.exports = Queue;
