
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

//Preferred when numbers are guaranteed to be positive.
var permuteUnique = function(nums) {
    const used = new Set();
    const mapSet = new Set();
    backtrack(nums, used, mapSet, []);
    const it = used.values();
    res = [];
    for (let value of it) {
        res.push(value.split(''));
    }
    return res;
};

var backtrack = function(nums, used, mapSet, current) {
    if (nums.length === current.length) {
        used.add(current.join(''));
        return;
    }
    for (let i = 0; i < nums.length; i++) {
        if (mapSet.has(i)) continue;
        mapSet.add(i);
        current.push(nums[i]);
        backtrack(nums, used, mapSet, current);
        current.pop();
        mapSet.delete(i);
    }
}


//For all types
function permuteUnique(nums) {
  const solutions = [];
  nums.sort((a, b) => a - b);
  findPermutations(nums, solutions, [], new Set());
  return solutions;
}

/**
 * @param {number[]} nums
 * @param {number[][]} solutions
 * @param {number[]} current
 * @param {Set} used
 */
function findPermutations(nums, solutions, current, used) {
  if (current.length === nums.length) {
      //console.log('re')
    return solutions.push(current.slice());
  }

  for (let i = 0; i < nums.length; i++) {
    if (used.has(i)) {
      //console.log('continuing1', 'i is', i);
      continue;
    }
    
    // If current matches previous, only continue if previous is used
    // if curr matches prev, means were working on duplicate characters because its sorted
    // we use a single representative for each duplicate? 
    if (i > 0 && nums[i] === nums[i - 1] && !used.has(i - 1)) {
      //console.log('continuing2', i)
      continue;
    }

    current.push(nums[i]);
    used.add(i);
      //.log('current', current, 'used', used)
    findPermutations(nums, solutions, current, used);
    current.pop();
    used.delete(i);
  }
}

