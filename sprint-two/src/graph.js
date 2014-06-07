var Graph = function(){
  this.nodes = {};
};

Graph.prototype.addNode = function(newNode, toNode){
  // Create new node object and add to nodes collection.
  var node = {};
  node.value = newNode;
  node.edges = {};
  this.nodes[newNode] = node;

  if (Object.keys(this.nodes).length === 2) {
    var objKeys = Object.keys(this.nodes);
    this.addEdge(objKeys[0], objKeys[1]);
  }

  if (toNode) {
    this.addEdge(newNode, toNode);
  }
};

Graph.prototype.contains = function(node){
  return this.nodes.hasOwnProperty(node);
};

Graph.prototype.removeNode = function(node){
  delete this.nodes[node];
};

Graph.prototype.getEdge = function(fromNode, toNode){
  return this.nodes.hasOwnProperty(fromNode) && this.nodes[fromNode].edges.hasOwnProperty(toNode);
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.nodes[fromNode].edges[toNode] = true;
  this.nodes[toNode].edges[fromNode] = true;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var node1 = this.nodes[fromNode];
  var node2 = this.nodes[toNode];

  delete node1.edges[toNode];
  delete node2.edges[fromNode];

  Object.keys(node1.edges).length === 0 && delete this.nodes[fromNode];
  Object.keys(node2.edges).length === 0 && delete this.nodes[toNode];
};

/*
 * Complexity: What is the time complexity of the above functions?
 * Constant.
 */
