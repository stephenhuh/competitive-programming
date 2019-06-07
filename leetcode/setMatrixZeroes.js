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

/** 
 * this version we reduce the space to just storing the values of actual zeroes 
 *  however it uses a pretty hacky way of working around no tuple types via string manip.
 **/
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


/**
 * Still O(mn) because worst case all els are zeroes
 * Just a cleaner alternative to v2 using objects
 * However, if u use synchronized sets for is and js separately, you get O(m+n)
 */
var setZeroesv3 = function(matrix) {
    let ijs = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                ijs.push({i, j})
            }
        }
    }
    
    while (ijs.length > 0) {
        let {i, j} = ijs.pop();
        walk(matrix, i, j);
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

function setZeroesv5(matrix) {
  let firstColHasZero = false;
  let firstRowHasZero = false;

  // Check if first col has zero
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] === 0) {
      firstColHasZero = true;
      break;
    }
  }

  // Check if first row has zero
  for (let j = 0; j < matrix[0].length; j++) {
    if (matrix[0][j] === 0) {
      firstRowHasZero = true;
      break;
    }
  }

  // Use first row and col as flags, set matrix[i][0] and matrix[0][j] to 0 if matrix[i][j] is 0
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  // Zero out cells based on flags in first row and col
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  // Zero out first col
  if (firstColHasZero) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][0] = 0;
    }
  }

  // Zero out first row
  if (firstRowHasZero) {
    for (let j = 0; j < matrix[0].length; j++) {
      matrix[0][j] = 0;
    }
  }
}
