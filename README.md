# Data Structure Light
Data Structure Light is a JavaScript library for data structure focused on a few main functions.

## Getting Started

## Supported Data Structure

### Queue
Create a queue:
```javascript
var queue = new Queue();
```
if you have a data for the first element in the queue:
```javascript
// if you have 10 as the first element for queue
var queue = new Queue(10);
```
Examples:
```javascript
var queue = new Queue();

queue.enqueue(1);   // [1]
queue.enqueue(2);   // [1, 2]
queue.enqueue(3);   // [1, 2, 3]

queue.peek();       // 1
queue.dequeue();    // 1
queue.dequeue();    // 2
queue.getRear();    // 1
queue.clear();
queue.isEmpty();    // true
queue.dequeue();    // undefined
```

### Priority Queue
Create a priority queue:
```javascript
var pqueue = new PriorityQueue();
```
Examples:
```javascript
var pqueue = new PriorityQueue();

pqueue.enqueue('Bear', 10);   // {10: ['Bear']}
pqueue.isEmpty();   // false
pqueue.enqueue('Bird', 10);   // {10: ['Bear', 'Bird']}
pqueue.maxPriority; // 10

pqueue.enqueue('Dog', 8);     // {10: ['Bear', 'Bird'], 8: ['Dog']}
pqueue.maxPriority; // 10
pqueue.size();      // 3
pqueue.dequeue(8);  // 'Dog'

pqueue.size(10);    // 2
pqueue.size(8);     // undefined

pqueue.dequeue(8);  // undefined
pqueue.enqueue('Bugs', -1);   // undefined
```

### Stack
```
Give the examples
```
### Linked List
```
Give the examples
```
### Doubly Linked List
```
Give the examples
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
