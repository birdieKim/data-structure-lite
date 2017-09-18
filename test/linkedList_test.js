var qunit = require('qunitjs');
var LinkedList = require('../linkedList');
var DoublyLinkedList = require('../doublylinkedList');

qunit.module('LinkedList');

qunit.test('Singly Linked List test', function(assert) {
  var singlyLinkedList = new LinkedList();

  assert.equal(singlyLinkedList.head, null);
  assert.equal(singlyLinkedList.insert(3, -2), undefined);
  assert.equal(singlyLinkedList.remove(-2), undefined);

  var tempNode = singlyLinkedList.add(5);
  assert.equal(singlyLinkedList.head, tempNode);

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

qunit.test('Doubly Linked List test', function(assert) {
  var doublyLinkedList = new DoublyLinkedList();

  assert.equal(doublyLinkedList.head, null);
  assert.equal(doublyLinkedList.length, 0);

  var tempNode = doublyLinkedList.addLast(10);
  assert.equal(doublyLinkedList.head, tempNode);
  assert.equal(doublyLinkedList.tail, tempNode);

  doublyLinkedList.addLast(20);
  assert.equal(doublyLinkedList.head.data, 10);
  assert.equal(doublyLinkedList.tail.data, 20);
  assert.equal(doublyLinkedList.tail.previous.data, 10);

  doublyLinkedList.insert(40, 2);
  assert.equal(doublyLinkedList.tail.data, 40);
  assert.equal(doublyLinkedList.tail.previous.data, 20);

  doublyLinkedList.insert(30, 2);
  assert.equal(doublyLinkedList.tail.data, 40);
  assert.equal(doublyLinkedList.tail.previous.data, 30);

  doublyLinkedList.addLast(50);
  doublyLinkedList.addLast(60);
  assert.equal(doublyLinkedList.searchNodeAt(0).data, 10);
  assert.equal(doublyLinkedList.searchNodeAt(2).data, 30);
  assert.equal(doublyLinkedList.searchNodeAt(3).data, 40);
  assert.equal(doublyLinkedList.searchNodeAt(5).data, 60);

  assert.equal(doublyLinkedList.insert(70, -2), undefined);

});
