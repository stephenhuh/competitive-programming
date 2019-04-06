function inorderRecursive(root) {
  const recurse = (res, root) => {
    if (!root) return;
    recurse(res, root.left);
    res.push(root.val);
    recurse(res, root.right);
  }

  const res = [];
  recurse(res, root);
  return res;
}

function inorderIterativeTraversalv1(root) {
    const stack = [];
    const res = [];
    
    while (root) {
        stack.push(root);
        root = root.left;
    }
    
    while (stack.length > 0) {
        const curr = stack.pop();
        
        res.push(curr.val);
        
        if (curr.right) {
            stack.push(curr.right);
            let rightAndTop = stack[stack.length-1];
            while (rightAndTop.left) {
                stack.push(rightAndTop.left);
                rightAndTop = stack[stack.length-1];
            }
        }
        
    }
    
    return res;
}

function inorderIterativeTraversalv2(root) {
  const stack = [];
  const res = [];

  while (root || stack.length) {
      //things on the stack have been left processed
    if (root) {
      stack.push(root);
      root = root.left; //initiates to null when no left
    } else {
      //things last popped off are currently being processed
      root = stack.pop();
      res.push(root.val);
      root = root.right; //no right? continue 
      //kind of a continuation to the beginning of the looping structure. as right becomes the starter for all left pushing.
    }
  }

  return res;
}
