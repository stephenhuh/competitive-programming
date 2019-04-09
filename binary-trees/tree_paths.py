# sum root to leaf paths
# basically the same as using preorder traversal, but summing up at the end and returning 0 if not root
def sumNumbers(self, root):
    """
    :type root: TreeNode
    :rtype: int
    """
    def helper(sum, root):
        if not root:
            return 0   
        sum = sum * 10 + root.val
        if not root.left and not root.right:
            return sum
        return helper(sum, root.left) + helper(sum, root.right)
     
    return helper(0, root)
