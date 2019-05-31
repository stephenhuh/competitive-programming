var numIslands = function(grid) {
    if (grid.length === 0 || grid[0].length === 0) return 0;
    let numRows = grid.length;
    let numCols = grid[0].length;
    let count = 0;
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            if (grid[i][j] === '1') {
                count++;
                dfs(grid, i, j);
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
