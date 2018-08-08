var invert = function(arr) {
  return arr.map((el) => {
    return el === 1 ? 0 : 1;
  })
}

var flipAndInvertImage = function(A) {
  A = A.map((arr) => arr.reverse());
  console.log('a after reverse', A);
  A = A.map((arr) => {
    return arr.map(
    el => {
      return el === 1 ? 0 : 1
    });
  });
  return A;
};

test('invert mapper should flip 1s to 0s and 0s to 1s', (el) => {
  expect(invert([1,0,0,1])).toEqual(expect.arrayContaining([0,1,1,0]));
});

test('general case: flipAndInvert', (el) => {
  expect(flipAndInvertImage([[1,1,0],[0,1,0]])).toEqual(expect.arrayContaining([[1,0,0], [1,0,1]]));
});
