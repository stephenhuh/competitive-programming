// NOT IN PLACE - not valid on LC
var setZeroes = function(matrix) {
    //O(mn)
    let copy = [];
    for (let i = 0; i < matrix.length; i++) {
        copy[i] = matrix[i].slice();
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) walk(copy, i, j);
        }
    }
    
    return copy;
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
