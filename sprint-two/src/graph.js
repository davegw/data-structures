var Graph = function(){
  this.nodes = [];
};

Graph.prototype.addNode = function(newNode, toNode){
  var node = {};
  node.value = newNode;
  node.edges = [];
  this.nodes.push(node);

  if (this.nodes.length === 2) {
    this.addEdge(this.nodes[0].value, this.nodes[1].value)
  }

  if (toNode) {
    this.addEdge(newNode, toNode)
  }
};

Graph.prototype.contains = function(node){
  for (var i = 0; i < this.nodes.length; i++){
    if (this.nodes[i].value === node) {
      return true;
    }
  }
  return false;
};

Graph.prototype.removeNode = function(node){
  for (var i = 0; i < this.nodes.length; i++){
    if (this.nodes[i].value === node) {
      this.nodes.splice(i, 1);
    }
  }
};

Graph.prototype.getEdge = function(fromNode, toNode){
  for (var i = 0; i < this.nodes.length; i++){
    if (this.nodes[i].value === fromNode) {
      for (var k = 0; k < this.nodes[i].edges.length; k++) {
        if (this.nodes[i].edges[k] === toNode) {
          return true;
        }
      }
    }
  }
  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  var findFrom;
  var findTo;
  for (var i = 0; i < this.nodes.length; i++){
    if (this.nodes[i].value === fromNode) {
      findFrom = this.nodes[i];
    }
    else if (this.nodes[i].value === toNode) {
      findTo = this.nodes[i];
    }
  }
  findFrom.edges.push(toNode);
  findTo.edges.push(fromNode);
  this.nodes;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var findFrom;
  var findTo;
  for (var i = 0; i < this.nodes.length; i++){
    if (this.nodes[i].value === fromNode) {
      findFrom = this.nodes[i];
      checkPosition = i;
    }
    else if (this.nodes[i].value === toNode) {
      findTo = this.nodes[i];
    }
  }
  var a = findFrom.edges.indexOf(toNode);
  findFrom.edges.splice(a, 1);
  var b = findTo.edges.indexOf(fromNode);
  findTo.edges.splice(b, 1);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
