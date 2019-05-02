var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0;
    //Brute implementation
    nums.sort((a,b) => a - b);
    let count = 1;
    let maxCount = 1;
    let i = 0;
    for (let j = 1; j < nums.length; j++){
        if (nums[j] === nums[i] + 1) {
            count++;
            i = j;
        } else if (nums[j] === nums[i]) {
            continue;
        } else {
            count = 1;
            i = j;
        }
        maxCount = maxCount > count ? maxCount : count;
    }
    return maxCount;
}
