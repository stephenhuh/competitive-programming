function mergeArrays(A, B) {
  let i = 0,
      j = 0,
      res = [];
  while (i < A.length && j < B.length) {
    if (A[i] < B[j]) {
      res.push(A[i]);
      i++;
    }
    else if (A[i] > B[j]) {
      res.push(B[j]);
      j++;
    }
    else {
      res.push(A[i])
      i++;
    }
  }
  if (A[i] === undefined) {
    while (B[j]) {
      res.push(B[j])
      j++;
    }
  } else if (B[j] === undefined) {
    while (A[i]) {
      res.push(A[i])
      i++;
    }
  }
  return res;
}
var myArray     = [3, 4, 6, 10, 11, 15];
var alicesArray = [1, 5, 8, 12, 14, 19];

console.log(mergeArrays(myArray, alicesArray));
console.log(mergeArrays([1,2],[5]));
console.log(mergeArrays([],[]));
