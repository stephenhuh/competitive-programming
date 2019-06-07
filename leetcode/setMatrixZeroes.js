/** this version uses a copy to walk **/
var setZeroes = function(matrix) {
    //O(mn)
    let copy = [];
    for (let i = 0; i < matrix.length; i++) {
        copy[i] = matrix[i].slice();
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (copy[i][j] === 0) walk(matrix, i, j);
        }
    }
    
};

var walk = function(copy, i, j) {
    //first iteration sets i, j to 0
    //up
    for (let r = i; r >= 0; r--) {
        copy[r][j] = 0; 
    }
    //first iteration resets i, j to 0
    //left
    for (let c = j; c >= 0; c--) {
        copy[i][c] = 0;
    }
    for (let r = 0; r < copy.length; r++) {
        copy[r][j] = 0;
    }
    for (let c = 0; c < copy[0].length; c++) {
        copy[i][c] = 0;
    }
}

/** this version we reduce the space to just storing the values of actual zeroes **/
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// NOT IN PLACE - not valid on LC
var setZeroesv2 = function(matrix) {
    //O(mn)
    let zeroes = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) zeroes.push(`${i},${j}`);
        }
    }
    
    while (zeroes.length > 0) {
        let [i, j] = zeroes.pop().split(',')
        walk(matrix, Number(i), Number(j));
    }
};

var walk = function(copy, i, j) {
    //first iteration sets i, j to 0
    //up
    for (let r = i; r >= 0; r--) {
        copy[r][j] = 0; 
    }
    //first iteration resets i, j to 0
    //left
    for (let c = j; c >= 0; c--) {
        copy[i][c] = 0;
    }
    for (let r = 0; r < copy.length; r++) {
        copy[r][j] = 0;
    }
    for (let c = 0; c < copy[0].length; c++) {
        copy[i][c] = 0;
    }
}
