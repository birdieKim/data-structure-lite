# Data Structure Lite
Data Structure Lite is a JavaScript library for data structure focused on a few main functions.
It supports data structures as follows: queue, priority queue, stack, linked list, doubly linked list, tree, binary search tree, heap

## Getting Started
### Install
Install with npm:
```
npm install data-structure-lite
```
Import into your file:
```html
<script type="text/javascript" src="/path/to/data-structure-lite.min.js"></script>
```
### Require
If you need a whole library:
```javascript
var DSLite = require('data-structure-lite');
```
If you need a certain module in this library:
```javascript
// An example of queue
var Queue = require('data-structure-lite/queue');

// An example of priority queue
var PriorityQueue = require('data-structure-lite/priorityQueue');

// An example of stack
var Stack = require('data-structure-lite/stack');

// An example of linked list
var LinkedList = require('data-structure-lite/linkedList');

// An example of doubly linked list
var DoublyLinkedList = require('data-structure-lite/doublyLinkedList');

// An example of tree
var Tree = require('data-structure-lite/tree');

// An example of binary search tree
var BinarySearchTree = require('data-structure-lite/binarySearchTree');

// An example of heap
var Heap = require('data-structure-lite/heap');
```

## Supported Data Structure


### Queue
Create a queue:
```javascript
var queue = new Queue();
```
If you have a data for the first element in the queue:
```javascript
// If you have 10 as the first element for the queue
var queue = new Queue(10);
```
Examples:
```javascript
var queue = new Queue();

queue.enqueue(100);   // return: 1, queue: [100]
queue.enqueue(200);   // return: 2, queue: [100, 200]
queue.enqueue(300);   // return: 3, queue: [100, 200, 300]

queue.peek();         // return: 100
queue.dequeue();      // return: 100, queue: [200, 300]
queue.dequeue();      // return: 200, queue: [300]
queue.getRear();      // return: 100, queue: []
queue.clear();        // queue: []
queue.isEmpty();      // return: true
queue.dequeue();      // return: undefined
```

------------
### Priority Queue
Create a priority queue:
```javascript
var pqueue = new PriorityQueue();
```
Examples:
```javascript
var pqueue = new PriorityQueue();

pqueue.enqueue('Bear', 10);   // return: 10, queue: {10: ['Bear']}
pqueue.isEmpty();             // return: false
pqueue.enqueue('Bird', 10);   // return: 10, queue: {10: ['Bear', 'Bird']}
pqueue.maxPriority;           // return: 10

pqueue.enqueue('Dog', 8);     // return: 10, queue: {10: ['Bear', 'Bird'], 8: ['Dog']}
pqueue.maxPriority;           // return: 10
pqueue.size();                // return: 3
pqueue.dequeue(8);            // return: 'Dog', queue: {10: ['Bear', 'Bird']}

pqueue.size(10);              // return: 2
pqueue.size(8);               // return: undefined

pqueue.dequeue(8);            // return: undefined
pqueue.enqueue('Bugs', -1);   // return: undefined (the priority passed in is not a natural number)
```

------------
### Stack
Create a stack:
```javascript
var stack = new Stack();
```
If you have a data for the first element in the stack:
```javascript
// If you have 10 as the first element for the stack
var stack = new Stack(10);
```
Examples:
```javascript
var stack = new Stack();

stack.top();        // return: -1

stack.push(10);     // return: 1, stack: [10]
stack.push(20);     // return: 2, stack: [10, 20]
stack.push(30);     // return: 3, stack: [10, 20, 30]

stack.top();        // return: 2
stack.pop();        // return: 30, stack: [10, 20]
stack.pop();        // return: 20, stack: [10]
stack.pop();        // return: 10, stack: []
stack.pop();        // return: undefined
stack.isEmpty();    // return: true

stack.push(15);     // return: 1, stack: [15]
stack.push(25);     // return: 2, stack: [15, 25]
stack.push(35);     // return: 3, stack: [15, 25, 35]
stack.push(45);     // return: 4, stack: [15, 25, 35, 45]

stack.top();        // return: 3

stack.clear();      // stack: []

stack.top();        // return: -1
stack.isEmpty();    // return: true
```

------------
### Linked List
Create a linked list:
```javascript
var linkedList = new LinkedList();
```
If you have a data for the first data in the list:
```javascript
// If you have 10 as the first data for the list
var linkedList = new LinkedList(10);
```
Examples:
```javascript
var linkedList = new LinkedList();

linkedList.head;                    // return: null
linkedList.insert(3, -2);           // return: undefined (index passed in is not a natural number)
linkedList.remove(-2);              // return: undefined (index passed in is not a natural number)

linkedList.add(5);                  // return: {data: 5, next: null}
linkedList.head;                    // return: {data: 5, next: null}

linkedList.add(7);                  // return: {data: 7, next: {data:5, next: null}}
linkedList.add(10);                 // return: {data: 10, next: {data:7, next: {data:5, next: null}}}
linkedList.add(15);                 // return: {data: 15, next: {data:10,
                                    //          next: {data:7, next: {data:5, next: null}}}}
linkedList.head.data;               // return: 15

linkedList.insert(8, 3);            // return: {data: 8, next: {data:5, next: null}}
linkedList.searchNodeAt(3).data;    // return: 8
linkedList.length;                  // return: 5

linkedList.remove(2);               // return: {data: 7, next: {data: 8, next: {data:5, next: null}}}
linkedList.searchNodeAt(2).data;    // return: 8
linkedList.length;                  // return: 4

linkedList.remove(3);               // return: {data:5, next: null}

linkedList.clear();
linkedList.isEmpty();               // return: true
```

------------
### Doubly Linked List
Create a doubly linked list:
```javascript
var doublyLinkedList = new DoublyLinkedList();
```
If you have a data for the first data in the list:
```javascript
// If you have 10 as the first data for the list
var doublyLinkedList = new DoublyLinkedList(10);
```
Examples:
```javascript
var doublyLinkedList = new doublyLinkedList();

doublyLinkedList.head;                // return: null
doublyLinkedList.length;              // return: 0

doublyLinkedList.addLast(10);         // return: {data: 10, next: null, previous: null}
doublyLinkedList.head;                // return: {data: 10, next: null, previous: null}
doublyLinkedList.tail;                // return: {data: 10, next: null, previous: null}

doublyLinkedList.addLast(20);         // return: {data: 20, next: null, previous: {data: 10, next: null, previous: null}}
doublyLinkedList.head;                // return: {data: 10, next: {data: 20, next: null,
                                      //                           previous: {data: 10, next: null, previous: null}},
                                      //          previous: null}
doublyLinkedList.tail;                // return: {data: 20, next: null, previous: {data: 10, next: null, previous: null}}

doublyLinkedList.insert(40, 2);       // return: {data: 40, next: null,
                                      //          previous: {data: 20, next: null, previous: {data: 10, next: null, previous: null}}
doublyLinkedList.tail.data;           // return: 40
doublyLinkedList.tail.previous.data;  // return: 20

doublyLinkedList.insert(30, 2);       // return: {data: 30,
                                      //          next: {data: 40, next: null, previous: {data: 30, next: {data: 40, ...}},
                                      //          previous: {data: 20, next: {data: 30, ...}, previous: {data: 10, ...}}}
doublyLinkedList.tail.data;           // return: 40
doublyLinkedList.tail.previous.data;  // return: 30

doublyLinkedList.addLast(50);         // return: {data: 50, next: null,
                                      //          previous: {data: 40, next: {data: 50, ...}, previous: {data: 30, ...}}}
doublyLinkedList.addLast(60);         // return: {data: 60, next: null,
                                      //          previous: {data: 50, next: {data: 60, ...}, previous: {data: 40, ...}}}
doublyLinkedList.searchNodeAt(0);     // return: {data: 10,
                                      //          next: {data: 20, next: {data: 30, ...}, previous: {data: 10, ...}},
                                      //          previous: null}
doublyLinkedList.searchNodeAt(2);     // return: {data: 30,
                                      //          next: {data: 40, next: {data: 50, ...}, previous: {data: 30, ...}},
                                      //          previous: {data: 20, ...}}

doublyLinkedList.remove(5);           // return: {data: 60, next: null, previous: {data: 50, ...}}
doublyLinkedList.insert(70, -2);      // return: undefined

doublyLinkedList.clear();
doublyLinkedList.isEmpty();           // return: true
```

------------
### Tree
Create a tree:
```javascript
var tree = new Tree();
```
If you have a data for the root node, the maximum number of children and a function for checking the equality between nodes:
```javascript
// A Function for checking the equality between nodes
// SHOULD have 2 parameters and return boolean value
var equalFunc = function(a, b)  {
  if (a === b) {
    return true;
  } else {
    return false;
  }
};
// If you have 10 as data of the first node, 2 as the max number of children that the parent node can have
// and a function for checking the equality between nodes
// If the equalFunc is undefined, the default function would be same as above.
var tree = new Tree(10, 2, equalFunc);
```
Examples:
```javascript
var equalFunc = function(a, b)  {
  if (a === b) {
    return true;
  } else {
    return false;
  }
};

var tree = new Tree('one', 2, equalFunc);

tree._root;                           // return: {data: 'one', parent: null, children: []}
tree.insert('two', 'one', 'BF');      // tree: {data: 'one', parent: null,
                                      //        children: [{data: 'two', parent: {data: 'one', ...}, children: []}]}

tree._root.children[0].parent.data;   // return: 'one'

tree.insert('three', 'one', 'BF');    // tree: {data: 'one', parent: null,
                                      //        children: [{data: 'two', ...}, {data: 'three, ...'}]}


tree.insert('four', 'one', 'BF');     //=> Error! This tree has the max number of children(2)
                                      //   so the parent node cannot have more than 2 children nodes

tree.insert('four', 'two', 'BF');     // tree: {data: 'one', parent: null,
                                      //        children: [{data: 'two', parent: {data: 'one', ...}, children: [{data: 'four', ...}]},
                                      //                   {data: 'three', ...}]}

tree.traverse('BF');                  // return: ['one', 'two', 'three', 'four']
tree.traverse('DF');                  // return: ['one', 'two', 'four', 'three']

tree.insert('five', 'three', 'BF');   // tree: {data: 'one', parent: null,
                                      //        children: [{data: 'two', children: [{data: 'four', ...}], ...},
                                      //                   {data: 'three', children: [{data: 'five', ...}], ...}]}
tree.traverse('BF', undefined, function(node) {
  node.data += '!';
});                                   // return: ['one!', 'two!', 'three!', 'four!']

tree.delete('three!', 'one!', 'BF');  // tree: {data: 'one!', parent: null,
                                      //        children: [{data: 'two!', children: [{data: 'four!', ...}], ...}]}
tree.traverse('BF');                  // return: ['one!', 'two!', 'four!']

tree.addToRoot('zero');               // tree: {data: 'zero', parent: null,
                                      //        children: [{data: 'one!', parent: {data: 'zero', ...},
                                      //                    children: [{data: 'two!', ...}]}]}
tree._root.data;                      // return: 'zero'
tree.traverse('DF');                  // return: ['zero', 'one!', 'two!', four!']

tree.clear();
tree.isEmpty();                       // return: true   
```


------------
### Binary Search Tree
Create a binary search tree:
```javascript
var tree = new BinarySearchTree();
```
If you have a data for the root node, the maximum number of children and a function for comparison between nodes:
```javascript
// A Function for comparison between nodes
// SHOULD have 2 parameters and return these:
//      a < b   : return negative value
//      a === b : return 0
//      a > b   : return positive value
var comapreFunc = function(a, b)  {
  return a - b;
};
// If you have 10 as data of the first node
// and a function for checking the equality between nodes
// If the compareFunc is undefined, the default function would be same as above.
var tree = new BinarySearchTree(10, compareFunc);
```
Examples:
```javascript
var comapreFunc = function(a, b)  {
  return a - b;
};

var tree = new BinarySearchTree(10, compareFunc);

tree._root;                           // return: {data: 10, left: null, right: null}

tree.insert(5);
tree.insert(20);
tree.insert(15);
tree.insert(7);
tree.insert(25);

tree.traverse('In-order');            // return: [5, 7, 10, 15, 20, 25]

tree.insert(3);                      

tree.delete(10);
tree.search(50);                      // return: undefined (50 is not in the binary search tree)

tree.traverse('Pre-order');           // return: [15, 5, 3, 7, 20, 25]
tree.delete(0);                       // return: undefined (0 is not in the binary search tree)

tree.search(15);                      // return: {data: 15, left: {data: 5, ...}, right: {data: 20, ...}}

tree.traverse('Post-order');          // return: [3, 7, 5, 25, 20, 15]

tree.findMinNode();                   // return: {data: 3, left: null, right: null
tree.findMaxNode();                   // return: {data: 15, left: null, right: null

tree.clear();
tree.isEmpty();                       // return: true
tree._root;                           // return: undefined
tree.traverse('Pre-order');           // return: undefined
tree.delete(0);                       // return: undefined (0 is not in the binary search tree)
tree.search(10);                      // return: undefined (The binary search tree is empty)
```




------------
### Heap
Create a heap:
```javascript
var heap = new Heap();
```
If you have a data for the root node or an array data for the heap, the maximum number of children and a function for comparison between nodes and the type for the heap ('MinHeap'/'MaxHeap' - 'MinHeap' is a default):
```javascript
// A Function for comparison between nodes
// SHOULD have 2 parameters and return these:
//      a < b   : return negative value
//      a === b : return 0
//      a > b   : return positive value
var comapreFunc = function(a, b)  {
  return a - b;
};
// If you have 10 as data of the first node
// and a function for checking the equality between nodes
// If the compareFunc is undefined, the default function would be same as above.
// If you want to have a min heap:
var heap = new Heap(10, compareFunc, 'MinHeap');

// If you have an array [1 ,2 , 3, 4, 5]
// and a function for checking the equality between nodes
// If the compareFunc is undefined, the default function would be same as above.
// If you want to have a max heap:
var anotherHeap = new Heap([1, 2, 3, 4, 5], compareFunc, 'MaxHeap');
```
Examples:
```javascript
var comapreFunc = function(a, b)  {
  return a - b;
};

var heap = new Heap(10, compareFunc, 'MaxHeap');

heap.getRoot();                       // return: 10
heap._type;                           // 'MaxHeap'
heap.insert(30);
heap._heapArray;                      // return: [30, 10]


heap = new Heap([50, 40, 30, 20, 10]);

heap.getRoot();                       // return: 10
heap._type;                           // return: 'MinHeap'
heap.deleteRoot();                    // return: 10
heap._heapArray;                      // return: [20, 30, 40, 50]


heap = new Heap([100, 80, 70, 120, 50], undefined, 'MaxHeap');

heap._heapArray;                      // return: [120, 100, 70, 80, 50]
heap.deleteRoot();                    // return: 120
heap.getRoot();                       // return: 100
heap.isEmpty();                       // return: false
heap.clear();
heap.getRoot();                       // return: undefined (The heap is empty)
heap.isEmpty();                       // return: true
```
