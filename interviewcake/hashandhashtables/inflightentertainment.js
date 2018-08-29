//Brute Force Brute Force Approach
function canTwoMoviesFillFlight(movieLengths, flightLength) {
  for (let i = 0; i < movieLengths; i++) {
    for (let j = i+1; j < movieLengths; j++){
          
    }
  }
  
}


/*
In this solution, interestingly, by using
two pointers, one positioned before the other we reach
O(n^2) -- more precisely, equivalent to the asymptotics
of the nCk formula.
*/

// Reverse Brute Force Approach
function canTwoMoviesFillFlightv2(movieLengths, flightLength) {
  // This can be likened to the 2sum problem.
  // Determine if two movie runtimes add up to the flight length
  let j = 1;
  for (let i = 0; i < j; i++) {
    for (j = 1; j < movieLengths.length; j++) {
        if (movieLengths[i] + movieLengths[j] === flightLength) {
          return true;  
        }
    }
  }

  return false;
}

/*

If we use an array to store the complements, we spend 
worstcase O(n) to check complements in array for every single new element.
Technically:
  [1,2,3,4] - one pass via for loop
   n + ... (n-3) + (n-2)+ (n-1)... -> O(n^2)
   
*/

function canTwoMoviesFillFlight(movieLengths, flightLength) {
  const cache = [];
  for (let i = 0; i < movieLengths.length; i++){
    let complement = flightLength - movieLengths[i];
    if (cache.indexOf(movieLengths[i]) !== -1) {
      return true;
    } else {
     cache.push(complement); 
    }
  }
  return false;
}

//Binary Search Implementation
function canTwoMoviesFillFlight(movieLengths, flightLength) {
  movieLengths.sort();
  for (let i = 0; i < movieLengths.length; i++){
    
  }
  
}

function binarySearchRecursive(target, nums) {
  const centerIdx = Math.floor(nums.length / 2);
  const centerVal = nums[centerIdx];
  
  if (target < nums[centerIdx]) {
    binarySearchRecursive(target, nums.slice(0, centerIdx)));
  } else if (target > nums[centerIdx]) {
    binarySearchRecursive(target, nums.slice(centerIdx, nums.length));
  } else {
    return centerIdx;
  }
}

function binarySearchIterative(target, nums){
  let i = Math.floor(nums.length / 2);
  while (nums[i] !== target) {
    if (target < nums[i]) {
      i = Math.floor() 
    }  
  }
  
}


function canTwoMoviesFillFlightSet(movieLengths, flightLength) {
  const movieLengthsSeen = new Set();
  for (let i = 0; i < movieLengths.length; i++){
    const firstMovieLength = movieLengths[i];
    
    const matchingSecondMovieLength = flightLength - firstMovieLength;
    if (movieLengthsSeen.has(matchingSecondMovieLength)) {
      return true;
    }
    
    movieLengthsSeen.add(firstMovieLength);
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



