# Data Structure Light
Data Structure Light is a JavaScript library for data structure focused on a few main functions.

## Getting Started


## Supported Data Structure

### Queue
------------
Create a queue:
```javascript
var queue = new Queue();
```
If you have a data for the first element in the queue:
```javascript
// if you have 10 as the first element for the queue
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


### Priority Queue
------------
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


### Stack
------------
Create a stack:
```javascript
var stack = new Stack();
```
If you have a data for the first element in the stack:
```javascript
// if you have 10 as the first element for the stack
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

### Linked List
------------
Create a linked list:
```javascript
var linkedList = new LinkedList();
```
If you have a data for the first data in the list:
```javascript
// if you have 10 as the first data for the list
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

### Doubly Linked List
------------
Create a doubly linked list:
```javascript
var doublyLinkedList = new DoublyLinkedList();
```
If you have a data for the first data in the list:
```javascript
// if you have 10 as the first data for the list
var doublyLinkedList = new DoublyLinkedList(10);
```
Examples:
```javascript
var doublyLinkedList = new doublyLinkedList();

doublyLinkedList.head;              // return: null
doublyLinkedList.length;            // return: 0

doublyLinkedList.addLast(10);       // return: {data: 10, next: null, previous: null}
doublyLinkedList.head;              // return: {data: 10, next: null, previous: null}
doublyLinkedList.tail;              // return: {data: 10, next: null, previous: null}

doublyLinkedList.addLast(20);       // return: {data: 20, next: null, previous: {data: 10, next: null, previous: null}}
doublyLinkedList.head;              // return: {data: 10, next: {data: 20, next: null,
                                    //                           previous: {data: 10, next: null, previous: null}},
                                    //          previous: null}
doublyLinkedList.tail;              // return: {data: 20, next: null, previous: {data: 10, next: null, previous: null}}

doublyLinkedList.insert(40, 2);     // return: {data: 40, next: null,
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

### Tree
```
Give the examples
```
### Binary Search Tree
```
Give the examples
```
### Heap
```
Give the examples
```
