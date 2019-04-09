def postorder(root):
    stack = [(root, 0)]
    res = []
    curr = root;
    
    while stack.length > 0:
        top = stack[-1]
        if top[1] is 1:
            curr = stack.pop()
            res.append(curr[0])
        elif top[1] is 0:
            if top.left: stack.append((top.left, 1))
            stack[-1] = top[top[0], 0]
        else:
            if top.right: stack.append((top.right,0))

    return res

