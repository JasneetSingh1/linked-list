import { Node } from "./node.js";

class LinkedList{
    

    constructor(){
        this.head = null;
        this.tail = null;
    }

    append(value){
        let newNode = new Node(value);

        if(this.head == null){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.tail.nextNode = newNode;
            this.tail = newNode;
        }
    }

    getHead(){
        return this.head;
    }

    getTail(){
        return this.tail;
    }

    size(){
        let count = 0;
        if(this.head == null) return 0;

        let start = this.head;
        while(start != null){
            start = start.nextNode;
            count++;
        }

        return count;
    }
}


export {LinkedList};