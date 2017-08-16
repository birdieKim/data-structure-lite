var Node = require('./node.js');

var LinkedList = function() {
  this.head = undefined;
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

  for(var i = 0; i < index-1; i++) {
    iterater = iterater.next;
  }

  inserted_node.next = iterater.next;
  iterater.next = inserted_node;

  return inserted_node;
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
  var len = this.length();

  if(index === 0) {
    removed_node = this.head;
    this.head = iterater.next;
  } else if(index < len-1) {
    for(var i = 0; i < index-1; i++) {
      iterater = iterater.next;
    }
    removed_node = iterater.next;
    iterater.next = iterater.next.next;
  } else if(index === len-1) {
    removed_node = this.searchNodeAt(len-1);
    iterater = this.searchNodeAt(len-2);
    iterater.next = null;
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
 * Get length of the list
 *
 * @return
 *   Length of the list
 */
LinkedList.prototype.length = function() {
  var iterater = this.head;
  var len = 0;

  if(iterater === null) {
    return len;
  } else {
    while(iterater != null) {
      iterater = iterater.next;
      len++;
    }
    return len;
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

  if(iterater === null || index > this.length()) {
    return undefined;
  } else {
    for(var i = 0; i < index; i++) {
      iterater = iterater.next;
    }
    return iterater;
  }
};


module.exports = LinkedList;
