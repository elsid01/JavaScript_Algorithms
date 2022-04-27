import LinkedList from '../02-linked-list/LinkedList';
import LinkedListNode from '../02-linked-list/LinkedListNode';



export class Stack{
  constructor(){

    this.linkedList = new LinkedList();
  }

  push(value){
    // Pushing means to lay the value on top of the stack.
    //Therefore let's just add new value at the head of the list.

    this.linkedList.prepend(value);
  }

  pop(){
    // Let's try to delete the first node from the linked list (end).
    // If there no linked list (it is empty) just return null.

    const removedHead = this.linkedList.deleteHead();
    return removedHead ? removedHead.value : null;
  }

  peek(){
    if(this.isEmpty()){
      return null;
    }
    return this.linkedList.head.value;
  }

  isEmpty(){
    return !this.linkedList.head;
  }

  toArray(){
    return this.linkedList.toArray().map(LinkedListNode => LinkedListNode.value);
  }

  toString(callback){
    return this.linkedList.toString(callback);
  }
}