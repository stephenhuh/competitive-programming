var minDepth = function(root) {
    if (!root) return 0;
    let ctr = 0;
    const queue = [root];
    
    while (queue.length > 0) {
        ctr++;
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const curr = queue.shift();
            //console.log(curr.val);
            if (!curr.left && !curr.right) return ctr;
            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
        }
    }
    return ctr;
}
