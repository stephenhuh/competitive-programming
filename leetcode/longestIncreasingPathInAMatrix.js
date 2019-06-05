/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    if (!matrix.length) return 0;
    const rows = matrix.length;
    const cols = matrix[0].length;
    
    // mem keeps the longest path count that starts at matrix[row][col]
    const mem = new Array(rows);
    for (let i = 0; i < mem.length; i++) {
        mem[i] = new Array(cols);
    }
    
    // DFS helper that recursively looks to the top, bottom, left, and right
    const dfs = (i = 0, j = 0, min = Number.MIN_SAFE_INTEGER) => {
        if (i < 0 || j < 0 || i >= rows || j >= cols) {
            return 0;
        }
        
        if (matrix[i][j] <= min) {
            return 0;
        }
        
        if (mem[i][j] != null) {
            return mem[i][j];
        }
        
        let top = dfs(i+1, j, matrix[i][j]);
        let bottom = dfs(i-1, j, matrix[i][j]);
        let right = dfs(i, j+1, matrix[i][j]);
        let left = dfs(i, j-1, matrix[i][j]);
        
        let count = 1 + Math.max(top, bottom, left, right);
        mem[i][j] = count;
        return count;
    };
    
    let maxCount = 0;
    // Compute the distance from every point in matrix
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            maxCount = Math.max(maxCount, dfs(i, j));
        }
    }
    
    return maxCount;
};
