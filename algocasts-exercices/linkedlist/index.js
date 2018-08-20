// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(value, nextNode = null) {
    this.data = value;
    this.next = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(newHead) {
    const newNode = new Node(newHead, this.head);
    this.head = newNode;
  }

  size() {
    let nodeCount = 0;
    let currentNode = this.head;
    while (currentNode != null) {
      nodeCount += 1;
      currentNode = currentNode.next;
    }
    return nodeCount;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let currentNode = this.head;
    if (currentNode === null) {
      return;
    }
    while (currentNode.next != null) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (this.head.next) {
      this.head = this.head.next;
    }
    else {
      this.clear();
    }
  }

  removeLast() {
    let currentNode = this.head;
    let lastNode = this.getLast();
    if (currentNode === null) {
      return;
    }
    if (currentNode.next === null) {
      this.clear();
      return;
    }
    while (currentNode.next !== lastNode) {
      currentNode = currentNode.next;
    }
    currentNode.next = null;
  }

  insertLast(newData) {
    const lastNode = this.getLast();
    const newNode = new Node(newData, null);
    if (lastNode) {
      lastNode.next = newNode;
    }
    else {
      this.head = newNode;
    }
  }

  getAt(index) {
    if (index > this.size()) {
      return null;
    }
    let counter = 0;
    let currentNode = this.getFirst();
    while (counter != index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

}

module.exports = { Node, LinkedList };
