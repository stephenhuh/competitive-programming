/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    const adjList = new Map();
    
    //seen coloring
    const seeing = new Set();
    const seen = new Set();
    
    const order = [];
    
    for (let i = 0; i < numCourses; i++) {
        adjList.set(i, []);
    }
    
    prerequisites.forEach(([v,u]) => {
        adjList.get(u).push(v);
    })
        
    const dfs = (curr) => {
        if (seeing.has(curr)) return false; //has a cycle
        if (seen.has(curr)) return true;  //prune
        seeing.add(curr);
        const vs = adjList.get(curr);
        for (let i = 0; i < vs.length; i++) {
            if (!dfs(vs[i])) return false;
        }
        seeing.delete(curr);
        seen.add(curr);
        order.push(curr);
        return true;
    }
    
    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) return [];
    }
    
    return order.reverse();
};
