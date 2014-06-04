var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var first = size;
  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[first+size] = value;
    size++;
  };

  someInstance.dequeue = function(){
    if (size > first) {
      size--;
    }
    var result = storage[first];
    delete storage[first];
    first ++;
    return result;
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
