/*

1) A queue is a collection of entities in which the
 entities are in Fist-In-First-Out (FIFO).

2) Main Operations:
 - enqueue : add an entity to the rear position
 - dequeue : remove an entity form the front position
 - peek : read the entity form the front of the queue without dequeuing it

 WHEN TO USE A QUEUE

 - Messaging appliction 
 -Used as component in many other algorithm : graph or tree

*/

import LinkedList from "../02-linked-list/LinkedList";



export default class Queue{

 constructor(){
   // We're going to implement Queue based on LinkedList.
   this.linkedList = new LinkedList();
 }  

 enqueue(value){
   this.linkedList.append(value);
 }

 dequeue(value){
   const removedHead = this.linkedList.deleteHead();

   return removedHead ? removedHead.value : null;
 }

 peek(){
   if(!this.linkedList.head){
     // If linked list is empty there is nothing to peek.
     return null;
   }

   // Just read the value form the end of linked list without deleting it.
   return this.linkedList.head.value;
 }

 isEmpty(){
   // The queue is empty in case if its linked list don't have a tail
   return !this.linkedList.head;
 }


 toString(callback){
   // Return sttring representation of the queue's linked list.
   return this.linkedList.toString(callback);
 }
}