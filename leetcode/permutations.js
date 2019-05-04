//level by level
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if (nums.length === 0) return [];
    const initLevel = [];
    initLevel.push([nums[0]])
    return helper(nums, 1, initLevel);
};

var helper = function(nums, idx, currentLevel) {
    if (currentLevel[0].length === nums.length) return currentLevel;
    
    const elToAdd = nums[idx];
    const nextLevel = [];
    for (let permutation of currentLevel) {
        for (let i = 0; i <= permutation.length; i++) {
            let left = permutation.slice(0, i);
            let right = permutation.slice(i);
            nextLevel.push([...left, elToAdd, ...right])
        }
    }
    return helper(nums, idx+1, nextLevel);
}







