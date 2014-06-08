var makeTree = function(value) {
  var tree = {};
  tree.value = value;
  tree.children = [];
  tree.parent = null;
  _.extend(tree, treeMethods);

  return tree;
}

treeMethods = {};

treeMethods.addChild = function(value){
  var child = makeTree(value);
  child.parent = this;
  this.children.push(child);
}

treeMethods.contains = function(target){
  if (this.value === target) {
    return true;
  }

  // Solve recursively using for loop.
  // var children = this.children;
  // for (var i = 0; i < children.length; i++) {
  //   if (children[i].contains(target)){;
  //     return true;
  //   }
  // }
  // return false;

  // Solve recursively with reduce.
  return _.reduce(this.children, function(accumulator, child) {
    if (accumulator) {
      return true;
    }
    return child.contains(target);
  }, false, this);
}

treeMethods.removeFromParent = function(){
  var removeChild = this;
  var parent = removeChild.parent;
  var findIndex;
  _.each(parent.children, function(child, index) {
    if (child === removeChild) {
      findIndex = index;
    }
  });
  parent.children.splice(findIndex, 1);
  removeChild.parent = null;
}

treeMethods.traverse = function(callback) {
  callback(this.value);
  _.each(this.children, function(child) {
    child.traverse(callback);
  });
};
