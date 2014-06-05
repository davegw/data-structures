var Queue = function() {
  this._storage = {};
  this._size = 0;
  this._first = 0;
};

Queue.prototype.enqueue = function(value) {
  this._storage[this._size + this._first] = value;
  this._size++;
};
Queue.prototype.dequeue = function(){
  this._size > 0 && this._size--;

  var temp = this._storage[this._first];
  delete this._storage[this._first];
  this._first++;
  return temp;
};
Queue.prototype.size = function() {
  return this._size;
};



