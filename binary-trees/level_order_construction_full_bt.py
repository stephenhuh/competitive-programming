class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

    def print(self):
        #preorder
        print(self.val)
        if self.left is not None:
            self.left.print()
        if self.right is not None:
            self.right.print()

# construct array given level order given that tree is a full binary tree
def construct_level_order_full(arr):
    queue = []
    root_val = arr.pop(0)

    root = TreeNode(root_val)
    queue.append(root)

    while len(queue) is not 0 and len(arr) is not 0:
        size = len(queue)
        for i in range(size):
            curr = queue.pop()
            left_child = TreeNode(arr.pop(0))
            right_child = TreeNode(arr.pop(0))

            curr.left = left_child
            queue.append(left_child)

            curr.right = right_child
            queue.append(right_child)

    return root

def construct_level_order(arr):
    queue = []
    root_val = arr.pop(0)

    root = TreeNode(root_val)
    queue.append(root)

    while len(queue) is not 0:
        size = len(queue)
        for i in range(size):
            print(arr)
            curr = queue.pop(0)

            if len(arr) is 0:
                return root
            left_val = arr.pop(0)

            if len(arr) is 0:
                return root
            right_val = arr.pop(0)

            if curr is not None:
                if left_val is not None:
                    left_child = TreeNode(left_val)
                    curr.left = left_child
                    queue.append(left_child)
                else:
                    queue.append(left_val)

                if right_val is not None:
                    right_child = TreeNode(right_val)
                    curr.right = right_child
                    queue.append(right_child)
                else:
                    queue.append(right_val)

    return root

construct_level_order([1,2,3,4,None,6,7,8,9]).print()
