var SinglyLinkedList = function() {

};

SinglyLinkedList.prototype = Object.create(require('./linkedList').prototype);
SinglyLinkedList.prototype.constructor = SinglyLinkedList;





module.exports = SinglyLinkedList;
