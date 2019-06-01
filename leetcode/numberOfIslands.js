/**
 * Uses both DFS or BFS. BFS seems to TLE on OJ
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (grid.length === 0 || grid[0].length === 0) return 0;
    const numRows = grid.length;
    const numCols = grid[0].length;
    let count = 0;
    const queue = [];
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            if (grid[i][j] === '1') {
                grid[i][j] === '0';
                count++;
                //dfs(grid, i, j);
                queue.push([i,j]);
                bfs(grid, queue);
            }
        }
    }
    return count;
};

var dfs = function(grid, i, j) {
    let numCols = grid[0].length;
    let numRows = grid.length;
    //mark current as seen
    grid[i][j] = '0'; 
    if (j - 1 >= 0 && grid[i][j-1] === '1') dfs(grid, i, j-1);   
    if ( i + 1 < numRows && grid[i+1][j] === '1') dfs(grid, i+1, j)
    if (j + 1 < numCols && grid[i][j+1] === '1') dfs(grid, i, j+1)
    if ( i - 1 >= 0 && grid[i-1][j] === '1') dfs(grid, i-1, j);
}

//TLE approach
var bfs = function(grid, queue) {
    if (queue.length === 0) return;
    let numCols = grid[0].length;
    let numRows = grid.length;
    
    while (queue.length > 0) {
        const [i,j] = queue.shift();
        grid[i][j] = '0';
        if (i-1 >= 0 && grid[i-1][j] === '1') queue.push([i-1,j]);
        if (j+1 < numCols && grid[i][j+1] === '1') queue.push([i, j+1]);
        if (i+1 < numRows && grid[i+1][j] === '1') queue.push([i+1, j]);
        if (j-1 >= 0 && grid[i][j-1] === '1') queue.push([i, j-1]);
    }
}
