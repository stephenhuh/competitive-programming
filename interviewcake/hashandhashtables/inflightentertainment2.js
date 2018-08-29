/*
  Notes:
*/

/*
  ([2,4], 1) -> false
  ([2,4], 6) -> true
  //iterate through
  //subtract from the total at a point
  ([3, 8, 3], 6)
  iterate through
    3 left
  
  
  ([1,2,3,4,5,6], 7)
  map: {
    6 : 1
    5 : 2
    4 : 3
    return true
  }
    iterate
      if we find a match for the complement inside hash we return true
      store key in hash and val as complement
    
    return false
    
  (1,2,3,5,2) 7
  map :{
    6 : 1
    5 : 2
    4 : 3
  }
  map: {
    4 : 2,
    
  }
*/
//Like 2 sum
function canTwoMoviesFillFlightx(movieLengths, flightLength) {
  const lengthLeftMap = new Map();
  for (let i = 0; i < movieLengths.length; i++){
    const complement = flightLength - movieLengths[i];
    if (lengthLeftMap.has(movieLengths[i])) {
      return true;
    } else {
      lengthLeftMap.set(complement, movieLengths[i]);
    }
  }
  return false;
}
//O(n) for iteration
//O(n) for searching through map

//we could refactor into an array to minimize time complexity
//where the array idx corresponds to the complement value,
//but this requires us to know the length of the array needed ahead of time.
/*
  what we really need is a set
*/
function canTwoMoviesFillFlight(movieLengths, flightLength) {
  const lengthLeftSet = new Set();
  for (let i = 0; i < movieLengths.length; i++){
    const complement = flightLength - movieLengths[i];
    if (lengthLeftSet.has(movieLengths[i])) {
      return true;
    } else {
      lengthLeftSet.add(complement, movieLengths[i]);
    }
  }
  return false;
}





// Tests

let desc = 'short flight';
let actual = canTwoMoviesFillFlight([2, 4], 1);
let expected = false;
assertEquals(actual, expected, desc);

desc = 'long flight';
actual = canTwoMoviesFillFlight([2, 4], 6);
expected = true;
assertEquals(actual, expected, desc);

desc = 'one movie half flight length';
actual = canTwoMoviesFillFlight([3, 8], 6);
expected = false;
assertEquals(actual, expected, desc);

desc = 'two movies half flight length';
actual = canTwoMoviesFillFlight([3, 8, 3], 6);
expected = true;
assertEquals(actual, expected, desc);

desc = 'lots of possible pairs';
actual = canTwoMoviesFillFlight([1, 2, 3, 4, 5, 6], 7);
expected = true;
assertEquals(actual, expected, desc);

desc = 'only one movie';
actual = canTwoMoviesFillFlight([6], 6);
expected = false;
assertEquals(actual, expected, desc);

desc = 'no movies';
actual = canTwoMoviesFillFlight([], 2);
expected = false;
assertEquals(actual, expected, desc);

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
