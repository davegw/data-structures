var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var _someInstance = mixinFunc({});
  // _someInstance._storage = {};
  // _someInstance._size = 0;
  // _someInstance._first = 0;

  return _someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this._storage[this._size + this._first] = value;
    this._size++;
  },
  dequeue: function(){
    this._size > 0 && this._size--;

    var temp = this._storage[this._first];
    delete this._storage[this._first];
    this._first++;
    return temp;
  },
  size: function() {
    return this._size;
  }
};

var mixinFunc = function(result){
  result.enqueue = queueMethods.enqueue;
  result.dequeue = queueMethods.dequeue;
  result.size = queueMethods.size;
  result._storage = {};
  result._size = 0;
  result._first = 0;
  return result;
}

