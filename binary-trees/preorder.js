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

var preorderTraversal = function(root) {
    const res = [];
    recurse(root, res);
    return res;
};

var recurse = function(root, acc) {
    if (!root) {
        return;
    } else {
        acc.push(root.val);
        recurse(root.left, acc);
        recurse(root.right, acc);
    }
}


var _preorderTraversal = function(root) {
    const res = [];
    return recurse(root, res);
}
var _recurse = function(root, acc) {
    if (!root) {
        return acc;
    } else {
        acc.push(root.val);
        
    } 
}



//I like this one right now more. makes sense and is close to inorder traversal. 
//the process to res before pushing makes more sense intuitively rn. Though i think my opinion is
//bound to change fast
var iterativePreorderv1 = function(root) {
  const stack = [];
  const res = [];
  
  if (root) stack.push(root);
  
  while (stack.length) {
      if (root) {
          res.push(root.val);
          if (root.left) stack.push(root.left);
          root = root.left;
      } else {
          const curr = stack.pop();
          if (curr.right) stack.push(curr.right);
          root = curr.right;
      }
  }
  
  return res;
}


// This push & pop then add to res is a little strange at the moment.
var iterativePreorderv2 = function(root) {
    const stack = [];
    const res = [];
    
    if (root) stack.push(root);
    
    while (stack.length) {
        if (root) {
            root = stack.pop()
            res.push(root.val);
            if (root.right) stack.push(root.right);
            if (root.left) stack.push(root.left);
        }
    }
    
    return res;
}
