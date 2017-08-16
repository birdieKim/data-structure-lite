var Node = require('./node.js');

var LinkedList = function() {
  this.head = undefined;
  this.length = 0;
};

/**
 *
 * Add a node to the head of the list
 *
 * @param {Any} data
 *   The data of the node to be added
 *
 * @fires
 *
 * @return
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
 * @param {Any} data
 *   The data of the node to be inserted
 * @param {Number} index
 *   The index of where the node to be inserted (zero-based)
 *
 * @fires
 *
 * @return
 *   The inserted node
 */
LinkedList.prototype.insert = function(data, index) {
  var inserted_node = new Node(data);
  var iterater = this.head;

  if(index === this.length) {
    iterater = this.searchNodeAt(this.length-1);
    iterater.next = inserted_node;
    this.length++;
    return inserted_node;
  } else if(index < this.length) {
    for(var i = 0; i < index-1; i++) {
      iterater = iterater.next;
    }
    inserted_node.next = iterater.next;
    iterater.next = inserted_node;
    this.length++;
    return inserted_node;
  }
};

/**
 *
 * Remove a node at the head of the list
 *
 * @param {Number} index
 *   The index of where the node to be removed (zero-based)
 *
 * @return
 *   The node just removed from the list
 */
LinkedList.prototype.remove = function(index) {
  var iterater = this.head;
  var removed_node;

  if(index === 0) {
    removed_node = this.head;
    this.head = iterater.next;
    this.length = 0;
  } else if(index < this.length-1) {
    for(var i = 0; i < index-1; i++) {
      iterater = iterater.next;
    }
    removed_node = iterater.next;
    iterater.next = iterater.next.next;
    this.length--;
  } else if(index === this.length-1) {
    removed_node = this.searchNodeAt(this.length-1);
    iterater = this.searchNodeAt(this.length-2);
    iterater.next = null;
    this.length--;
  }

  return removed_node;
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
 * @return
 *   Boolean for whether the list is empty or not
 */
LinkedList.prototype.isEmpty = function() {
  if(this.head){
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
 * @return
 *   Node at the position of the given index
 */
LinkedList.prototype.searchNodeAt = function(index) {
  var iterater = this.head;

  if(iterater === null || index > this.length) {
    return undefined;
  } else {
    for(var i = 0; i < index; i++) {
      iterater = iterater.next;
    }
    return iterater;
  }
};


module.exports = LinkedList;
