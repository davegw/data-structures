var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var _someInstance = Object.create(queueMethods)
  _someInstance._storage = {};
  _someInstance._size = 0;
  _someInstance._first = 0;

  return _someInstance;
};

var queueMethods = {};
queueMethods.enqueue = function(value) {
  this._storage[this._size + this._first] = value;
  this._size++;
};
queueMethods.dequeue = function(){
  this._size > 0 && this._size--;

  var temp = this._storage[this._first];
  delete this._storage[this._first];
  this._first++;
  return temp;
};
queueMethods.size = function() {
  return this._size;
};


