import { LinkedList } from "./linkedList.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot"); //
list.append("hamster");
list.append("snake");
list.append("turtle");

// console.log(list.toString());
// list.insertAt('lion', 4);
console.log(list.size());
console.log(list.toString());
list.removeAt(4);
list.removeAt(4);
console.log(list.toString());
