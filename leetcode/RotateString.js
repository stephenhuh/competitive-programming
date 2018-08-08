var rotateString = function(A, B) {
    if (A === B) return true;
    if (A.length !== B.length) return false;
    const maxShifts = A.length - 1;
    A = A.split('');
    B = B.split('');
    for (let i = 0; i < maxShifts; i++) {
        A = shift(A);
        if (compare(A, B)) {
            return true;
        } else {
            continue;
        }
    }
    return false;
};

var compare = function (A, B) {
    return JSON.stringify(A) === JSON.stringify(B);
}

var shift = function (arr) {
    let first = arr.shift();
    arr.push(first);
    return arr;
}


/* Make sure to check edge cases
 * shift and unshift operations. shift takes off the first. unshift adds to the first
 * for loop, return statements quit
 * compare arrays can be done with JSON.stringify(A) and checking equality
 */

var _compareWithEvery = function(A, B) {
  return A.every((v, i) => v === B[i]);
}

var _compareWithWhile = function(A, B) {
  let i = A.length
  while (i--) {
    if (A[i] !== B[i]) return false;
  }
}
/*
 * While decrementing is equivalent to for i = 0 i < length;
 *
 */
