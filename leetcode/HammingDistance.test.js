//Attempt 1
const _hammingDistance = (x, y) => {
  const binaryBase = 2;
  const _x = x.toString(binaryBase);
  console.log("_x is...", _x);
  const _y = y.toString(binaryBase);
  console.log("_y is...", _y);
  let _z = _x ^ _y; //number
  console.log("_z pre-transform..", _z);
  _z = _z.toString(10).split(''); //array of strings
  console.log("_z is..", _z);
  return _z.reduce((acc, curr) => {
      return curr === '1' ? acc + 1 : acc;
  }, 0)
}

//Attempt 2
var hammingDistance = function(x, y) {
  const z = x ^ y;
  return z.toString(2).split('').reduce((acc, curr) => {
    return curr === '1' ? acc + 1 : acc; 
  }, 0);
}


test('general case: should compute correctly', () => {
    expect(hammingDistance(3, 7)).toBe(1);
    expect(hammingDistance(93, 73)).toBe(2);
});


/*
 * Must use ^ operator with numbers as it actually treats the inputs as numbers and
 * does the bitwise operations
 * Use the ^ operator to diff between things
 * result of ^ operator is a number
 * .toString(2) to convert to binary
 */
