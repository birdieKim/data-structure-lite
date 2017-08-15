var Stack = function() {

};

Stack.prototype = Object.create(require('./arrayData').prototype);
Stack.prototype.constructor = Stack;

/**
 *
 * Insert an element to the top of the stack
 *
 * @param {Any} element
 *   The element to be inserted
 *
 * @fires push
 *
 * @return
 *   New length of the stack after the insertion
 */
Stack.prototype.push = function(element) {
  this.elements.push(element);
};

/**
 *
 * Remove an element at the top of the stack
 *
 * @fires pop
 *
 * @return
 *   The element just removed from the stack
 */
Stack.prototype.pop = function() {
  return this.elements.pop();
};

/**
 *
 * Set the index of where an element will be poped
 *
 * @return
 *   The last index of the stack
 */
Stack.prototype.top = function() {
  var len = this.elements.length;
  if(this.isEmpty()) {
    return -1;
  } else {
    return len-1;
  }
};


module.exports = Stack;
