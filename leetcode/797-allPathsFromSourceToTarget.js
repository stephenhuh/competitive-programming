/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    const neighbors = new Map();
    
    for (let i = 0; i < graph.length; i++) {
        neighbors.set(i, []);
    }
    
    for (let i = 0; i < graph.length; i++) {
        const edge = graph[i];
        if (edge.length === 0) continue;
        edge.forEach((dest) => {
            neighbors.get(i).push(dest);
        })
    }
    
    const src = 0;
    const path = [];
    const paths = [];
    const end = graph.length - 1;
    
    path.push(src);
    dfs(src, neighbors, path, paths, end)
    return paths;
};

const dfs = (node, neighbors, path, paths, end) => {
    if (node === end) {
        paths.push([...path])
        return;
    }
    
    const dests = neighbors.get(node);
    for (const dest of dests) {
        path.push(dest);
        dfs(dest, neighbors, path, paths, end);
        path.pop();
    }
    
    
}
