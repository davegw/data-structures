var makeBinarySearchTree = function(value){
  /*
    PROTOTYPAL INSTANTIATION
   */
  var treeInstance = Object.create(makeBinarySearchTree.prototype);
  treeInstance.left = undefined;
  treeInstance.right = undefined;
  treeInstance.value = value;

  return treeInstance;
};

makeBinarySearchTree.prototype.insert = function(value){
  if (value < this.value) {
    if (this.left === undefined) {
      this.left = makeBinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else if (value > this.value) {
    if (this.right === undefined) {
      this.right = makeBinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
};

makeBinarySearchTree.prototype.contains = function(value){
  if (value === this.value) {
    return true;
  } else if (value < this.value && this.left) {
    return this.left.contains(value);
  } else if (value > this.value && this.right) {
    return this.right.contains(value);
  }
  return false;
};
makeBinarySearchTree.prototype.depthFirstLog = function(func){
  func(this.value);
  if (this.left !== undefined) {
    this.left.depthFirstLog(func);
  }
  if (this.right !== undefined) {
    this.right.depthFirstLog(func);
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 * Logarithmic
 */
