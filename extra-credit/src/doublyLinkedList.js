var makedoublyLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    newNode = makeNode(value);
    if (list.tail === null) {
      // Set both head and tail if tail === null
      list.head = list.tail = newNode;
    }
    else {
      // Create temp variable for old tail;
      var oldTail = list.tail;
      // Point old tail next to newNode
      oldTail.next = newNode;
      // Point newNode prev to old tail
      newNode.prev = oldTail;
      // Point tail to newNode
      list.tail = newNode;
    }
  }
  list.addToHead = function(value){
    // create node
    var newNode = makeNode(value);
    // Check if head is null 
    if (list.head === null) {
      //Set both head and tail
      list.head = list.tail = newNode;
    }
    else {
      // set oldHead to head
      var oldHead = list.head;
      // set oldHead prev to newNode
      oldHead.prev = newNode;
      // set newNode next to oldHead
      newNode.next = oldHead;
      // set head to newNode
      list.head = newNode;
    }
  }
  list.removeHead = function(){
    var oldHead = list.head;
    // Check if we are on the only node
    if(list.head === list.tail) {
      // If we are set head and tail to null;
      list.head = list.tail = null;
    }
    else {
      //point head to newHead
      list.head = oldHead.next;
      // point newHead.prev to null
      list.head.prev = null;
      // set oldHead next to null
      oldHead.next = null;
    }
    return oldHead.value;
  }
  list.removeTail = function(){
    var oldTail = list.tail;
    if (list.tail === list.head) {
      list.tail = list.head = null;
    }
    else {
      list.tail = oldTail.prev;
      list.tail.next = null;
      oldTail.prev = null;
    }
    return oldTail.value;
  }
  list.contains = function(target){
    var test = list.head;
    var found = false
    var count = 0;
    while (test !== null) {
      if(test.value === target) {
        found = true;
        break;
      }
      test = test.next;
    }
    return found;
  }
  return list;
}


var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;
  node.prev = null;

  return node;
};