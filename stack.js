/**
 *
 * Create a stack
 *
 * @param {*} [element]
 *   The element to be inserted to the stack
 */
var Stack = function(element) {
  this.elements = [];   // the array where elements are stored
  if (element) {
    this.elements.push(element);
  }
};

Stack.prototype = Object.create(require('./arrayData').prototype);
Stack.prototype.constructor = Stack;

var _eventCallbacks = {};
var _canvasObjects = [];

Stack.prototype.addEventListener = function(eventName, callback) {
  // prevent unkown eventName
  if (_eventCallbacks[eventName] === undefined) {
    _eventCallbacks[eventName] = [];
  }

  _eventCallbacks[eventName].push(callback);
};

Stack.prototype.removeEventListener = function(eventName, callback) {
  var index = _eventCallbacks[eventName].indexOf(callback);

  if (index !== -1) {
    _eventCallbacks[eventName].splice(index, 1);
  }
};

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
    return undefined;
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
