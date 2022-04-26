import LinkedListNode from "./LinkedListNode";

export default class LinkList{
 
  
  constructor(){
    this.head = null;
    this.tail = null;
  }

  prepend(value){
    //Make new node to be a head
    const newNode = new LinkedListNode(value, this.head)

    this.head = newNode;
    if(!this.tail){
      this.tail = newNode;
    }

    return this
  }

  append(value){

    const newNode = new LinkedListNode(value);

    // If there is no head yet let's make new node a head

    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
      return this
    }

    const currentTail = this.tail
    currentTail.next = newNode;

    // Attach new node to the end of linked list.

    this.tail = newNode;
    return this
  }


  delete(value){

    if(!this.head){
      return null;
    }

    let deletedNode = null;

    // If the head must be deleted then make next node that is different
    // from the head to be a new head.

    while(this.head && this.head.value === value){
      deletedNode = this.head;
      this.head = this.head.next;
    }

    let currentNode = this.head;

    if(currentNode !==null){
      while(currentNode.next){
        if(currentNode.next.value === value){
          deletedNode = currentNode.next;
        currentNode.next = currentNode.next.next;  
        }else{
          currentNode = currentNode.next
        }
      }
    }
  }


  deleteTail(){
    const deleteTail = this.tail;

    if(this.head === this.tail){
      //There is only one node in linked list.
      this.head = null;
      this.tail = null;

      return deleteTail;
    }

    // If there are many nodes in linked list....
    // Rewind to the last node and delete "next" link for the node
    //before the last one

    let currentNode = this.head;
    while(currentNode.next){
      if(!currentNode.next.next){
        currentNode.next = null
      }else{
        currentNode = currentNode.next;
      }
    }

    this.tail = currentNode;
    return deleteTail
  }

  deleteHead(){
    if(!this.head){
      return null;
    }

    const deleteHead = this.head;

    if(this.head.next){
      this.head = this.head.next;
    }else{
      this.head = null;
      this.tail = null;
    }

    return deleteHead;
  }

  find(value=undefined, callback=undefined){
    if(!this.head){
      return null;
    }

    let currentNode = this.head;

    while(currentNode){
      // If callback is specified then try to find node by callback
      if(callback && callback(currentNode.value)){
        return currentNode;
      }

      // If value is specified then try to compare by value....
      if(value !== undefined && currentNode.value === value){
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  toArray(){
    const nodes = [];

    let currentNode = this.head;

    while(currentNode){
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }
    return nodes;
  }

  toString(callback){
    return this.toArray().map(node => node.toString(callback)).toString();
  }
}