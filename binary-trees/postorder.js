const postorder = (root) => {
  const stack = [];
  const res = [];
  stack.push(root);
  let curr = root;

  while (stack.length > 0) {
    while (curr.left) {
      stack.push(curr.left);
      curr = curr.left;
    }

    if(curr.right) {
      stack.push(curr.right);
      curr = curr.right;
    } else {
      curr = null;
      res.push(stack.pop());
    }
  }

  return res;

}


const postorder = (root) => {
  const stack = [];
  const res = [];
  stack.push(root);
  let curr = root;

  while (stack.length > 0) {
    while (curr.left) {
      stack.push(curr.left);
      curr = curr.left;
    }

    curr = stack[stack.length-1];
    if (curr.right) {
      stack.push(curr.right);
    }

  }
  return res;
}
