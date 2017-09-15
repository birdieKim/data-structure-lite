var Stack = function() {
  this.elements = [];   // the array where elements are stored
};

Stack.prototype = Object.create(require('./arrayData').prototype);
Stack.prototype.constructor = Stack;

/**
 *
 * Insert an element to the top of the stack
 *
 * @param {*} element
 *   The element to be inserted
 *
 * @return {Number}
 *   New length of the stack after the insertion
 */
Stack.prototype.push = function(element) {
  return this.elements.push(element);
};

/**
 *
 * Remove an element at the top of the stack
 *
 * @return {*}
 *   The element just removed from the stack
 *   If the stack is empty, return undefined
 */
Stack.prototype.pop = function() {
  if (!this.isEmpty()) {
    return this.elements.pop();
  } else {
    console.warn('The stack is empty.');
  }
};

/**
 *
 * Set the index of where an element will be poped
 *
 * @return {Number}
 *   The last index of the stack
 *   If the stack is empty, return -1
 */
Stack.prototype.top = function() {
  var len = this.elements.length;
  if (this.isEmpty()) {
    console.warn('The stack is empty.');
    return -1;
  } else {
    return len - 1;
  }
};

module.exports = Stack;
