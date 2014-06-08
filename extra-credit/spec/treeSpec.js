describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = makeTree();
  });

  it('should have methods named "addChild", "contains" and "removeFromParent", and properties named "value" and "parent"', function() {
    expect(tree.addChild).to.be.a("function");
    expect(tree.contains).to.be.a("function");
    expect(tree.removeFromParent).to.be.a("function");
    expect(tree.hasOwnProperty("value")).to.equal(true);
    expect(tree.hasOwnProperty("parent")).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function(){
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function(){
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function(){
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  it('should be able to identify parent', function(){
    tree.value = 4;
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[0].addChild(8);
    expect(tree.children[0].parent.value).to.equal(4);
    expect(tree.children[0].children[1].parent.value).to.equal(5);
    expect(tree.children[0].children[0].parent.parent.value).to.equal(4);
  });

  it('should be able to remove parent', function(){
    tree.value = 4;
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[0].addChild(8);
    var removedChild = tree.children[0];
    expect(removedChild.parent.value).to.equal(4);
    expect(tree.contains(7)).to.equal(true);
    tree.children[0].removeFromParent();
    expect(tree.contains(6)).to.equal(true);
    expect(tree.contains(5)).to.equal(false);
    expect(tree.contains(7)).to.equal(false);
    expect(removedChild.parent).to.equal(null);
    expect(removedChild.contains(7)).to.equal(true);
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
  });

});
