/*
 * Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.

Example 1:

Input: [1,3,4,2,2]
Output: 2
Example 2:

Input: [3,1,3,4,2]
Output: 3
Note:

You must not modify the array (assume the array is read only).
You must use only constant, O(1) extra space.
Your runtime complexity should be less than O(n2).
There is only one duplicate number in the array, but it could be repeated more than once.
 *
 */


// Doesnt satisfy constraints (sort, check back)
var findDuplicate = function(nums) {
    nums.sort();
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i-1]) {
            return nums[i];
        }
    }
    return -1;
};


var findDuplicate2 = function(nums) {
  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return nums[i];
    } else {
      set.add(nums[i])
    }
  }
}

