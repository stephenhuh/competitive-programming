/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    
    nums.sort((a, b) => a - b);
    const result = [];
    for (let start = 0; start < nums.length - 2; start++) {
        const target = 0 - nums[start];
        if (start > 0 && nums[start] === nums[start-1]) continue;
        twoSum(nums, start, start + 1, nums.length - 1, target, result)
    }
    
    return result;
};

    const twoSum = function(nums, start, i, j, target, result) {
        while (i < j) {
            const sum = nums[i] + nums[j];
            //console.log(nums[start], nums[i], nums[j], target);
            if (sum > target) {
                j--;
            } else if (sum < target) {
                i++;
                //even if there are dupes, doesn't matter, you keep going since it wont be in result set anyways
            } else {
                result.push([nums[start], nums[i], nums[j]]);
                // move both pointers because you've checked both numbers already
                // meaning all 3 pointers are accounted for. 
                // because it is sorted, it's guaranteed that decrementing just end pointer
                // means we'll definitely be under sum, and incrementing beg ptr 
                // guarantees we'll be above sum.
                // therefore we can move both, knowing that this is the only way since the incremented pointer
                // increases the sum, while the decremented pointer decreases it
                while (nums[i] === nums[i+1]) i++;
                while (nums[j] === nums[j-1]) j--;
                i++;
                j--;
            }
        }
    }  
