var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};




var treeMethods = {};

treeMethods.addChild = function(value){
  // make new tree
  var child = makeTree(value);
  // assign parent to new tree
  this.children.push(child);
};

treeMethods.contains = function(target){
  var wasFound = false;
  var checkChild = function (node) {
    if (node.value === target || wasFound === true) {
      wasFound = true;
      return;
    }

    _.each(node.children, function (element) {
      checkChild(element);
    });
  };
  checkChild(this);

  return wasFound;
};

treeMethods.traverse = function(callback){
  var traverseTree = function(tree) {
    callback(tree.value);
    _.each(tree.children, function(child) {
      traverseTree(child);
    });
  };
  traverseTree(this);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
