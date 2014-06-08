var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  this._count = 0;
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  if (bucket === undefined) {
    var bucket = [];
    this._storage.set(i, bucket);
  }

  var found = false;
  for (var j = 0; j < bucket.length; j++) {
    var tuple = bucket[j];
    if (tuple[0] === k){
      tuple[1] = v;
      found = true;
    }
  }

  if (!found){
    bucket.push([k, v]);
    this._count++;
    if (this._count >= 0.25 * this._limit) {
      this.resize(this._limit * 2)
    }
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);

  if (bucket === undefined) {
    return null;
  }
  for (var j = 0; j < bucket.length; j++) {
    var tuple = bucket[j];
    if (tuple[0] === k){
      return tuple[1];
    }
  };
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(i);
  if (bucket === undefined) {
    return null
  }
  for (var j = 0; j < bucket.length; j--) {
    var tuple = bucket[j];
    if (tuple[0] === k){
      bucket.splice(j, 1);
      this._count--;
      if (this._count < 0.25 * this.limit) {
        this.resize(this.limit/2);
      }
      return tuple[1];
    }
  };
};

HashTable.prototype.resize = function(size){
  // Store old storage hash.
  var oldStorage = this._storage

  var context = this;

  // Need to loop through
  oldStorage.each(function(bucket) {
    if (bucket === undefined) {
      return;
    }
    for (var j = 0; j < bucket.lenght; j++) {
      var tuple = bucket[j];
      // callback is the argument used in the helper function and is a free function invocation so it is a global reference.
      // Will work too:
      // context.insert(tuple[0], tuple[1]);
      insert.call(context, tuple[0], tuple[1]);
    }
  }/*.bind(this)*/); // You can also use bind here if you want to use this.insert
    // this is being bound by resize as the containing function which is invoked by the call to resize 
    // made by the original hash table, so this = original hash table.
};


//Resizing Hash Table.
  //Keep track of how many buckets we have. Acutally tracking how many items we've put in the has table total.


/*
 * Complexity: What is the time complexity of the above functions?
 * Constant.
 */
