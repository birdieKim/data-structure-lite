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
  var p = this.head;

  for(var i = 0; i < index-1; i++) {
    p = p.next;
  }

  inserted_node.next = p.next;
  p.next = inserted_node;

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
  var p = this.head;
  var removed_node;

  if(index == 0) {
    removed_node = this.head;
    this.head = p.next;
  } else if(index < this.length()) {
    for(var i = 0; i < index-1; i++) {
      p = p.next;
    }
    removed_node = p.next;
    p.next = p.next.next;
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
  var p = this.head;
  var len = 0;

  if(p == null) {
    return len;
  } else {
    while(p != null) {
      p = p.next;
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
  var p = this.head;

  if(p == null) {
    return undefined;
  } else {
    for(var i = 0; i < index; i++) {
      p = p.next;
    }
    return p;
  }
};


module.exports = LinkedList;
