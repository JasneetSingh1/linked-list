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
    for (let i = 0; i <= index; i++) {
      if (result != null) {
        result = result.nextNode;
      }
    }

    return result;
  }

  pop(){
    let start = this.head;
    while(start.nextNode != this.tail){
        start = start.nextNode;
    }
    
    let popped = start.nextNode;
    start.nextNode = null;
    this.tail = start;
    return popped;
  }
}

export { LinkedList };
