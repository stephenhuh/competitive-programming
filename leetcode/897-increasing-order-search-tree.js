/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    const res = [];
    traverse(root, res);
    let dumbNode = new TreeNode(-1); 
    let curr = dumbNode;
    let answer = curr;
    for (let i = 0; i < res.length; i++) {
        curr.right = new TreeNode(res[i]);
        curr = curr.right;
    }
    return answer.right;
};

const traverse = (node, res) => {
    if (!node) return;
    traverse(node.left, res);
    res.push(node.val);
    traverse(node.right, res);
}

const createDegenTree = (root, res, i = 0) => {
    if (i === res.length) {
        root = null;
        return;
    }
    console.log(i);
    root.val = res[i];
    root.left = null;
    root.right = new TreeNode();
    if (i === res.length - 1) root.right = null;
    createDegenTree(root.right, res, i+1);
}

