
const test = [
    [1,2,3],
    [1,2,3],
    [1,2,3],
]

const transpose = (mdA) => {
  return mdA[0].map((col, i) => mdA.map(row => row[i]));
};

const transposeFor =(mdA) => {
  var newArray = [],
      origArrayLength = array.length,
      arrayLength = array[0].length,
      i;
  for(i = 0; i < arrayLength; i++){
      newArray.push([]);
  };

  for(i = 0; i < origArrayLength; i++){
      for(var j = 0; j < arrayLength; j++){
          newArray[j].push(array[i][j]);
      };
  };
}


// Using destructing
/*
 * j < i lets you skip the diagonal
 */
function transposeDestructure(matrix) {
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < i; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
}

console.log(transpose(test));
