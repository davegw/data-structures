var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var valueAtHashKey = this._storage.get(i);
  var arr;
  var foundValue = false;
  if (valueAtHashKey === undefined) {
    this._storage.set(i, [k, v]);
  } else {
    // Check if we have an array of an array
    if (Array.isArray(valueAtHashKey[0])) {
      arr = valueAtHashKey.slice();
      _.each(valueAtHashKey, function(keyValueArray) {
        if (keyValueArray[0] === k) {
          keyValueArray = [k,v];
          foundValue = true;
        }
      });
      if (!foundValue) {
        arr.push([k, v]);
        this._storage.set(i, arr);
      }
    } else {
      // Check if the hash key is the same as the item to insert.
      if (valueAtHashKey[0] === k) {
        arr = [k, v];
      } else {
        // Create a new array of an array.
        arr = [valueAtHashKey, [k, v]];
      }
      this._storage.set(i, arr);
    }
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var valueAtHashKey = this._storage.get(i);
  var foundValue;
  if (Array.isArray(valueAtHashKey[0])) {
    _.each(valueAtHashKey, function(keyValueArray) {
      if (keyValueArray[0] === k) {
        foundValue = keyValueArray[1];
      }
    });
    return foundValue;
  } else {
    return this._storage.get(i)[1];
  }
};

HashTable.prototype.remove = function(k){
  this.insert(k, null);
};



/*
 * Complexity: What is the time complexity of the above functions?
 * Constant.
 */
