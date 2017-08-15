var qunit = require('qunitjs');
var SinglyLinkedList = require('../src/singlyLinkedList');

qunit.module('LinkedList');

qunit.test('Singly Linked List test', function(assert) {
  var singlyLinkedList = new SinglyLinkedList();

  assert.equal(singlyLinkedList.head, undefined);

  var p = singlyLinkedList.add(5);
  assert.equal(singlyLinkedList.head, p);

  singlyLinkedList.add(7);
  singlyLinkedList.add(10);
  singlyLinkedList.add(15);
  assert.equal(singlyLinkedList.head.data, 15);

  singlyLinkedList.insert(8, 3);
  assert.equal(singlyLinkedList.searchNodeAt(3).data, 8);
  assert.equal(singlyLinkedList.length(), 5);

  singlyLinkedList.remove(2);
  assert.equal(singlyLinkedList.searchNodeAt(2).data, 8);
  assert.equal(singlyLinkedList.length(), 4);

  singlyLinkedList.clear();
  assert.equal(singlyLinkedList.isEmpty(), true);


});
