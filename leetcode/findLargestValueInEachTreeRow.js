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
var largestValues = function(root) {
    const res = [];
    if (!root) return res;
    
    const queue = [root];
    res.push(root.val);
    while (queue.length > 0) {
        let levelMax = Number.MIN_SAFE_INTEGER;
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const curr = queue.shift()
            if (curr.left) {
                levelMax = curr.left.val > levelMax ? curr.left.val : levelMax;
                queue.push(curr.left)
            }
            if (curr.right)  {
                levelMax = curr.right.val > levelMax ? curr.right.val : levelMax;
                queue.push(curr.right);
            }
        }
        res.push(levelMax);
        levelMax = Number.MIN_SAFE_INTEGER;
    }
    res.pop();
    return res;
};
