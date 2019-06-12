/**
 * @param {string[]} grid
 * @return {number}
 */

var dfs = function(grid, i, j) {
    grid[i][j] = 1;
    if (i - 1 >= 0 && grid[i-1][j] === 0) dfs(grid, i-1, j);
    if (j + 1 < grid[0].length && grid[i][j+1] === 0) dfs(grid, i, j+1);
    if (i + 1 < grid.length && grid[i+1][j] === 0) dfs(grid, i+1, j);
    if (j - 1 >= 0 && grid[i][j-1] === 0) dfs(grid, i, j-1);
}

var regionsBySlashes = function(grid) {
    
    //count size of grid, NxN
    const size = grid.length * 3;
    
    //initialize grid
    const highResGrid = new Array(size).fill().map((col) => new Array(size).fill(0))   
    
    //scale by 3
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '/') {
                highResGrid[i*3+0][j*3+2] = 1;
                highResGrid[i*3+1][j*3+1] = 1;
                highResGrid[i*3+2][j*3+0] = 1;
            } else if (grid[i][j] === '\\') {
                highResGrid[i*3+0][j*3+0] = 1;
                highResGrid[i*3+1][j*3+1] = 1;
                highResGrid[i*3+2][j*3+2] = 1;
            } else {
                //spaces
                continue;
            }
        }
    }
    
    let numIslands = 0;
    for (let i = 0; i < highResGrid.length; i++) {
        for (let j = 0; j < highResGrid[0].length; j++) {
            if (highResGrid[i][j] === 0) {
                dfs(highResGrid, i, j);
                numIslands++;
            } 
        }
    }
    return numIslands;
};
