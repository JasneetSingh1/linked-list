import { Node } from "./node.js";

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    let newNode = new Node(value);

    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.nextNode = newNode;
      this.tail = newNode;
    }
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }

  size() {
    let count = 0;
    if (this.head == null) return 0;

    let start = this.head;
    while (start != null) {
      start = start.nextNode;
      count++;
    }

    return count;
  }

  prepend(value) {
    let newNode = new Node(value);

    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.nextNode = this.head;
      this.head = newNode;
    }
  }

  getAt(index) {
    let result = this.head;
    for (let i = 0; i < index; i++) {
      if (result != null) {
        result = result.nextNode;
      }
    }

    return result;
  }

  pop() {
    let start = this.head;
    while (start.nextNode != this.tail) {
      start = start.nextNode;
    }

    let popped = start.nextNode;
    start.nextNode = null;
    this.tail = start;
    return popped;
  }

  contains(value) {
    let start = this.head;
    while (start != null) {
      if (start.value == value) return true;
      start = start.nextNode;
    }
    return false;
  }

  find(value) {
    let start = this.head;
    let count = 0;
    while (start != null) {
      if (start.value == value) return count;
      count++;
      start = start.nextNode;
    }
    return null;
  }

  toString() {
    let result = " ";
    let start = this.head;
    while (start != null) {
      result = result + `( ${start.value} ) -> `;
      start = start.nextNode;
    }
    result = result + "null";
    return result;
  }

  insertAt(value, index){
    let before = this.head;

    for (let i = 0; i < index -1; i++) {
        if (before != null) {
          before = before.nextNode;
        }
      }
    let after = before.nextNode.nextNode;
    let newNode = new Node(value);
    before.nextNode = newNode;
    newNode.nextNode = after;

  }
}
export { LinkedList };
