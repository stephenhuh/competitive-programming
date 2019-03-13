var merge = function(intervals) {
    intervals.sort((a, b) => {
        return a.start - b.start
    })
    
    const stack = [];
    if (intervals.length === 0) return [];
    stack.push(intervals.shift());
    
    for (let interval of intervals) {
        if (stack[stack.length-1].end >= interval.start) {
            stack[stack.length-1].end = stack[stack.length-1].end < interval.end ? interval.end : stack[stack.length-1].end;
        } else {
            stack.push(interval);
        }
    }
    
    return stack;
};

