/**
 * @param {number[][]} grid
 * @return {number}
 */
//WRONG
var maxAreaOfIsland = function(grid) {
    let max = 0;
    let curr;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                curr = check(grid, i, j);
            } 
            max = max > curr ? max = curr : curr 
        }
    }
    return max;
};

var check = function (grid, i, j) {
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length){
        return 0;
    }
    if (!grid[i][j]) {
        return 0;
    }
    grid[i][j] = 0;
    return 1 + check(grid, i+1, j) + check(grid, i-1, j) + check(grid, i, j-1) + check(grid, i, j+1);
}


/**
 * @param {number[][]} grid
 * @return {number}
 */
var _maxAreaOfIsland = function(grid) {
    let max = 0;
    let curr;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                curr = check(grid, i, j);
            } 
            if (curr) {
                max = max > curr ? max : curr    
            }
        }
    }
    return max;
};

var check = function (grid, i, j) {
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length){
        return 0;
    }
    if (!grid[i][j]) {
        return 0;
    }
    grid[i][j] = 0;
    return 1 + check(grid, i+1, j) + check(grid, i-1, j) + check(grid, i, j-1) + check(grid, i, j+1);
}



