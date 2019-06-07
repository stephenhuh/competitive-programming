// solution when you are allowed to alter signature
function maxDepth(node, lvl = 0) {
  if (!node) return lvl;
  const left = maxDepth(node.left, lvl + 1);
  const right = maxDepth(node.right, lvl + 1);
  return Math.max(left, right);
}


