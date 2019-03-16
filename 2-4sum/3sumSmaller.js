// Brute Force 3904ms 164.8MB
var threeSumSmaller = function(nums, target) {
    let i = 0;
    let j = i+1;
    let k = j+1;
    const set = new Set();
    for (i = 0; i < j; i++){
        for (j = i +1; j < k; j++){
            for (k = j+1; k < nums.length; k++){
                //console.log(nums[i], nums[j], nums[k]);
                if (nums[i] + nums[j] + nums[k] < target) 
                    set.add([nums[i], nums[j], nums[j]]);
            }
        }
    }
    return set.size;
};


// Utilizing sorting and 2sum
var threeSumSmaller = function(nums, target) {
    nums.sort((a,b) => a - b);
    let count = 0;
    for (let i = 0; i < nums.length - 2; i++) {
        count += twoSumSmaller(nums, i+1, target - nums[i]);
        //console.log(count, i+1, target-nums[i]);
    }
    return count;
}

var twoSumSmaller = function(nums, startIdx, target) {
    let count = 0;
    let left = startIdx;
    let right = nums.length - 1;
    while (left < right) {
        if (nums[left] + nums[right] < target) {
            count += right - left;
            left++;
        } else {
            right --;
        }
    }
    return count;
}

