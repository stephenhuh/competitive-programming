//DFS 
var countComponents = function(n, edges) {
    const adjList = new Map();
    for (let i = 0; i < n; i++) {
        adjList.set(i, []);
    }
    
    for (let edge of edges) {
        const u = edge[0];
        const v = edge[1];
        adjList.get(u).push(v);
        adjList.get(v).push(u);
    }
    const visited = new Set();
    
    let count = 0;
    for (let i = 0; i < n; i++) {
        if (!visited.has(i)) {
            dfs(i, visited, adjList);
            count++;
        }
    }
    return count;
    
};
const dfs = (curr, visited, adjList) => {
    visited.add(curr);
    for (let neighbor of adjList.get(curr)) {
        // havent seen node
        if (!visited.has(neighbor)) {
            dfs(neighbor, visited, adjList);
        }
    }
}

