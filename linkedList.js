var Node = require('./node');

/**
 *
 * Create a linked list
 *
 * @param {*} [data]
 *   The data to be inserted to the list
 */
var LinkedList = function(data) {
  this.head = null;
  this.length = 0;

  if (data) {
    var node = new Node(data);
    this.head = node;
    this.length++;
  }
};

var _eventCallbacks = {};
var _canvasObjects = [];

LinkedList.prototype.addEventListener = function(eventName, callback) {
  // prevent unkown eventName
  if (_eventCallbacks[eventName] === undefined) {
    _eventCallbacks[eventName] = [];
  }

  _eventCallbacks[eventName].push(callback);
};

LinkedList.prototype.removeEventListener = function(eventName, callback) {
  var index = _eventCallbacks[eventName].indexOf(callback);

  if (index !== -1) {
    _eventCallbacks[eventName].splice(index, 1);
  }
};

/**
 *
 * Add a node to the head of the list
 *
 * @param {*} data
 *   The data of the node to be added
 *
 * @return {Node}
 *   The new head node
 */
LinkedList.prototype.add = function(data) {
  var node = new Node(data);

  node.next = this.head;
  this.head = node;

  this.length++;

  return this.head;
};

/**
 *
 * Insert a node to the list
 *
 * @param {*} data
 *   The data of the node to be inserted
 *
 * @param {Number} index
 *   The index of where the node to be inserted (zero-based)
 *
 * @return {Node|undefined}
 *   The inserted node
 *   Return undefined, if the index is not a natural number (including 0)
 */
LinkedList.prototype.insert = function(data, index) {
  var insertedNode = new Node(data);
  var iterater = this.head;

  if (index === this.length) {
    iterater = this.searchNodeAt(this.length - 1);
    iterater.next = insertedNode;
    this.length++;
    return insertedNode;
  } else if (index >= 0 && index < this.length) {
    for (var i = 0; i < index - 1; i++) {
      iterater = iterater.next;
    }
    insertedNode.next = iterater.next;
    iterater.next = insertedNode;
    this.length++;
    return insertedNode;
  }
};

/**
 *
 * Remove a node at the position of the given index
 *
 * @param {Number} index
 *   The index of where the node to be removed (zero-based)
 *
 * @return {Node|undefined}
 *   The node just removed from the list
 *   Return undefined, if the index is not a natural number (including 0)
 */
LinkedList.prototype.remove = function(index) {
  var iterater = this.head;
  var removedNode;

  if (index === 0) {
    removedNode = this.head;
    this.head = iterater.next;
    this.length = 0;
  } else if (index >= 0 && index < this.length - 1) {
    for (var i = 0; i < index - 1; i++) {
      iterater = iterater.next;
    }
    removedNode = iterater.next;
    iterater.next = iterater.next.next;
    this.length--;
  } else if (index === this.length - 1) {
    removedNode = this.searchNodeAt(this.length - 1);
    iterater = this.searchNodeAt(this.length - 2);
    iterater.next = null;
    this.length--;
  } else {
    console.warn('The index passed in is out of bounds.');
    return undefined;
  }

  return removedNode;
};

/**
 *
 * Make the list empty
 *
 */
LinkedList.prototype.clear = function() {
  this.head = null;
  this.length = 0;
};

/**
 *
 * Check if the list is empty
 *
 * @return {Boolean}
 *   Boolean for whether the list is empty or not
 */
LinkedList.prototype.isEmpty = function() {
  if (this.head) {
    return false;
  } else {
    return true;
  }
};

/**
 *
 * Get the node from the position of the given index
 *
 * @param {Number} index
 *   The index of where the node to be removed (zero-based)
 *
 * @return {Node|undefined}
 *   Node at the position of the given index
 *   Return undefined, if the index is not a natural number (including 0)
 */
LinkedList.prototype.searchNodeAt = function(index) {
  var iterater = this.head;

  if (index >= 0 && index < this.length) {
    for (var i = 0; i < index; i++) {
      iterater = iterater.next;
    }
    return iterater;
  } else {
    console.warn('The list is empty or the index you passed in is not valid.');
    return undefined;
  }
};

module.exports = LinkedList;
