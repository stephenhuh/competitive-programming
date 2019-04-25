var subarraySum = function(nums, k) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            sum += nums[j];
            if (sum === k) count++;
        }
        sum = 0;
    }
    return count;
};

var subarraySum = function(nums, k) {
    let map = new Map();
    let count = 0;
    map.set(0, 1)
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        let complement = sum - k

        if (map.has(complement)) {
            count += map.get(complement);
        }
        if (map.has(sum)) {
            map.set(sum, map.get(sum) + 1);
        } else {
            map.set(sum, 1);    
        }
    }
    return count;
}
