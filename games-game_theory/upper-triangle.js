// iterate diagonally through upper triangular matrix
let count = 4;
let matrix = [];
while (count--) {
  matrix.push(Array(4).fill(false));
}
console.log(matrix);

for (let l = 2; l <= 4; l++) {
  for (let i = 0; i <= 4 - l; i++) {
    let j = i + l -1;
    matrix[i][j] = true
  }
}

console.log(matrix);
