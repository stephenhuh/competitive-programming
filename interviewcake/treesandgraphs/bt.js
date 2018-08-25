function BinaryTreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

//Nodes per level 2^n where n is the level

/*
 * Property 1: the number of total nodes on each "level" doubles as we move down the tree.

A binary tree with 5 rows of nodes. The root node is on top, and every node has 2 children in the row below. Each row is labelled with the number of nodes in the row, which doubles from the top down: 1, 2, 4, 8, 16.
Property 2: the number of nodes on the last level is equal to the sum of the number of nodes on all other levels (plus 1). 
 *
 *
 */

//Manual Construction
const BT = new BinaryTreeNode(3);

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let res = [];
    //Check if root is possibly non existent i.e. inorderTraversal(null). Check if root.val is existent, though if it werent tree would be invalid or empty: t = TN(null); t.left = 3 = inOrderTraversal(t);
    if (root) {
        traverse(root, res);
    }
    return res;
};

var traverse = function(root, res) {

    if (root.left) {
        traverse(root.left, res)
    }
    if (root.val) {
        res.push(root.val);
    }
    if (root.right) {
        traverse(root.right, res)
    }
};

/*
 * Note the use of an accumulator in order to retain a list as the result. We have to use an accumulator in order to return something created at the top-level
 * function
 */

// Moving the checks all to one function
var inorderTraversalv2 = function(root) {
    let res = [];
    traverse(root, res); //this effectively mutates res
    return res;
};

var traverse = function(root, res) {
  if (root) {
    if (root.left) {
        traverse(root.left, res)
    }
    if (root.val) {
        res.push(root.val);
    }
    if (root.right) {
        traverse(root.right, res)
    }
  }
};


