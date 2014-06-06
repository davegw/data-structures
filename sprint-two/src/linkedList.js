var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if (list.tail) {
      var oldTail = list.tail;
      list.tail = makeNode(value);
      oldTail.next = list.tail;
    } else {
      list.tail = list.head = makeNode(value);
    }
  };

  list.removeHead = function(){
    var oldHeadValue = list.head.value;
    list.head = list.head.next;
    return oldHeadValue;
  };

  list.contains = function(target){
    var test = list.head;
    while (test !== null) {
      if (test.value === target) {
        return true;
      }
      test = test.next;
    }
    return false;
  };

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * Linear!
 */
