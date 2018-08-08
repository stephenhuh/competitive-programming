/**
 * transpose
 *
 * @param A
 * @returns {undefined}
 */

var transpose = function(A) {
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A.length; j++) {
      A[i][j] = A[j][i];
    }
  }
  return A;
}

var mapTranspose = function(A) {
  return A[0].map((el, idx) => {
    return A.map(row => row[idx]);
  })
}

console.log(transpose([[1,2,3], [4,5,6], [7,8,9]]));


/*
 * A[0].length is the inner
 * A.length is the outer
 *
 */
