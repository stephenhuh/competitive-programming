class Solution(object):
    def maxDepth(self, root):
        """
        :type root: Node
        :rtype: int
        """
        if not root:
            return 0
        queue = [root]
        depth = 0
        while queue:
            level_size = len(queue)
            while level_size > 0:
                curr = queue.pop(0)
                level_size -= 1
                for child in curr.children:
                    queue.append(child)                
            depth += 1
        return depth
