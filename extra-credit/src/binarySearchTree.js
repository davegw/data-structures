var makeBinarySearchTree = function(value) {
  /*
    PROTOTYPAL INSTANTIATION
   */
  var treeInstance = Object.create(makeBinarySearchTree.prototype);
  treeInstance.left = undefined;
  treeInstance.right = undefined;
  treeInstance.value = value;

  return treeInstance;
};

makeBinarySearchTree.prototype.insert = function(value) {
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

makeBinarySearchTree.prototype.contains = function(value) {
  if (value === this.value) {
    return true;
  } else if (value < this.value && this.left) {
    return this.left.contains(value);
  } else if (value > this.value && this.right) {
    return this.right.contains(value);
  }
  return false;
};

makeBinarySearchTree.prototype.depthFirstLog = function(func) {
  func(this.value);
  if (this.left !== undefined) {
    this.left.depthFirstLog(func);
  }
  if (this.right !== undefined) {
    this.right.depthFirstLog(func);
  }
};

makeBinarySearchTree.prototype.breadthFirstLog = function(func) {
  // Create recursive function that takes an array as a parameter.
  var breadthFirst = function(row) {
    // For each node in the argument run the func.
    var evalRow = [];
    var childRow = [];
    evalRow.push(row);
    evalRow = _.flatten(evalRow);
    for (var i = 0; i < evalRow.length; i++) {
      func(evalRow[i].value);
      // For each node child add to new array.
      evalRow[i].left !== undefined && childRow.push(evalRow[i].left);
      evalRow[i].right !== undefined && childRow.push(evalRow[i].right);
    }
    if (childRow.length > 0) {
      // Call recursive function using the new array as an argument. 
      breadthFirst(childRow);
    }
    
  }
  // invoke recursive function using the current tree.
  breadthFirst(this);
}

/*
 * Complexity: What is the time complexity of the above functions?
 * Logarithmic
 */
