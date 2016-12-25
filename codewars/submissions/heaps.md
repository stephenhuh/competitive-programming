#Heaps
#The Data Structure
Heaps are incredible for getting max or minimum value. Also insertion is fucking great. Heaps are partially sorted
Heaps can be implemented with minimal complexity using an array

##Run Time Analysis
Average:
Space: O(n)
Insert: O(1)
Find-max-min: O(1)
Delete: O(log n)

##Strengths
* Store in sorted order
* Efficiently support range queries
* Efficiently support nearest-neighbor queries
* Better worst-case guarantees

[More Information on BST Strengths/Applications](http://stackoverflow.com/questions/5010854/concrete-examples-of-using-binary-search-trees?noredirect=1&lq=1)

**NOTE: this problem uses the left child when a value is equal**


#About

Test.describe("Edge case", function() {
  Test.it("should fill root node when empty", function(){
    Test.assertEquals(bst.root.val, 5, "Root Node not filled when BST is empty");
  });
});

```
function Node(val){
  this.val = val;
  this.left = null;
  this.right = null;
}

function BST(){
  this.root = null;
}

BST.prototype.push = function(val){
  //implement here:
  let curr = this.root;
  let newNode = new Node(val);
    
  if (!curr){
    this.root = newNode;
  } else {
    while(true){
      if (newNode.val <= curr.val) {
        if (!curr.left) {
          curr.left = newNode;
          break;
        } else {
          curr = curr.left;
        }
      } else {
        if (!curr.right) {
          curr.right = newNode;
          break;
        } else {
          curr = curr.right;
        }
      }
    }
  }
}
```

#Priority Queue
some systems use low priority to indicate high importance
why would we want to use a heap?
keeping a DS sorted is very big operation when we only want the max or min
finding out how to process items of different weight as fast as possible

##Applications
Prims algorithm
Djikstra algorithm







