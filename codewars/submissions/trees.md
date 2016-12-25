#Binary Search Trees - Create Push
#The Problem
Write the `push` function for Binary Search Trees given the following code.

```
function Node(val){
  this.val = val;
  this.left = null;
  this.right = null;
}

function BinarySearchTree(){
  this.root = null;
}


```


#The Data Structure
Binary Search Trees (BSTs) are data structures that provide for fast lookup, addition, and removal.

At each Node in the tree, there are three values, the value stored at that node, the left child, and the right child. Each node has a left subchild and right child that are also nodes. Each left child's value is less than the value of it's parent's value and the right child's value is greater than the value of it's parent. Because of this, when traversing the tree from the root node to a specific node, the nodes required to search reduce in half -- thereby performing binary search.

BSTs have the advantage of not needing to reserve more memory than necessary, as would be the case for hashtables or arrays.

##Run Time Analysis
Average:
Space: O(n)
Insert: O(log n)
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


