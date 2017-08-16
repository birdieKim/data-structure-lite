var qunit = require('qunitjs');
var LinkedList = require('../src/linkedList');

qunit.module('LinkedList');

qunit.test('Singly Linked List test', function(assert) {
  var singlyLinkedList = new LinkedList();

  assert.equal(singlyLinkedList.head, undefined);

  var p = singlyLinkedList.add(5);
  assert.equal(singlyLinkedList.head, p);

  singlyLinkedList.add(7);
  singlyLinkedList.add(10);
  singlyLinkedList.add(15);
  assert.equal(singlyLinkedList.head.data, 15);

  singlyLinkedList.insert(8, 3);
  assert.equal(singlyLinkedList.searchNodeAt(3).data, 8);
  assert.equal(singlyLinkedList.length, 5);

  singlyLinkedList.remove(2);
  assert.equal(singlyLinkedList.searchNodeAt(2).data, 8);
  assert.equal(singlyLinkedList.length, 4);

  assert.equal(singlyLinkedList.remove(3).data, 5);

  singlyLinkedList.clear();
  assert.equal(singlyLinkedList.isEmpty(), true);
});
