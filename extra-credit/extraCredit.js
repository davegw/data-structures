describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = makeTree();
  });

  it('should traverse every element of the tree', function(){
    tree.value = 4;
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[0].addChild(8);
    var traverseTree = [];
    tree.traverse(function(num) {
      traverseTree.push(num*10);
    });
    expect(traverseTree).to.eql([40,50,70,80,60]);
  })

});
