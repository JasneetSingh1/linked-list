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
}


export {LinkedList};