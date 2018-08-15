/*
 * Write a recursive function for generating all permutations of an input string. Return them as a set.
 * Don't worry about time or space complexity—if we wanted efficiency we'd write an iterative version.
 * To start, assume every character in the input string is unique.
 * Your function can have loops—it just needs to also be recursive.
 */

function myFunction(input) {
  // write the body of your function here
  //abc 
          //"ab", [], "c"
  return helper(input.slice(0, input.length), [ ], input[input.length-1]);
}

function helper(input, acc, char) {
  if (input.length === 1) {
    return input;
  }
  
  //['ab', 'ba']
  //want : ['cab', 'cba',     'cab', 'cba',     'abc', 'bac']
  for (let i = 0; i < input.length; i++){
    for (let j = 0; j < acc.length; j++){
      //i = 0;
      let oldStr = acc[i].split('');
      let newStr = oldStr[i]
    }
  }
  return helper(['abc', ''])
}


function getPermutations(string) {
  debugger;
  if (string.length <=1) {
    return new Set(string);
  }
  
  var allCharsExceptLast = string.slice(0, -1);
  var lastChar = string[string.length - 1];
  
  var permutationsOfAllCharsExceptLast = getPermutations(allCharsExceptLast);
  
  var permutations = new Set();
  permutationsOfAllCharsExceptLast.forEach(function (permutationOfAllCharsExceptLast) {
    for (var position = 0; position <= allCharsExceptLast.length; position++) {
      var permutation = permutationOfAllCharsExceptLast.slice(0, position)+ lastChar + permutationOfAllCharsExceptLast.slice(position);
      permutations.add(permutation);
    }
  });
  
  return permutations; 
}

/*
 * 1. Slicing works with negative indices.
 * 2. Set.prototype.forEach exists!
 * 3. Inserting any string into another string can be generalized to sliceLeft, add, sliceRight.
 * 4. Dont always think your recursive calls need to be at the tail, though this does happen, when you need custom behavior when unwinding call stack, recursive 
 *    could be called in middle.
 *
 * The hard part in this problem was spotting subproblems to be solved, how does AB help ABC permutations? Run through examples and be patient with trying to find 
 * underlying patterns, its the beauty of mathematics!
 *
 * Here we used a top-down recursion method, by breaking down the string continuously until we could have the base case.
 * This was done according to problem spec, but could also be done bottom-up iteratively. This is dynamic programming because of the overlapping subproblems.
 * Notice that to get permutations of "ABC" we can use the permutations of "AB" and transitively and consequently, the permutations of "A".
 */




