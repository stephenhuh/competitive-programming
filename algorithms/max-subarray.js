/*
 * O(n^2) - Brute Force - specifically n(n-1)/2
 * Outer loop to start index
 * Inner loop to go till end
 */





/* O(nlogn) - dynamic programming
 */

/*
class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        
    }
};

class Solution {
public:
    int maxSubArray(int A[], int n) {
        // IMPORTANT: Please reset any member data you declared, as
        // the same Solution instance will be reused for each test case.
        if(n==0) return 0;
        return maxSubArrayHelperFunction(A,0,n-1);
    }
    
    int maxSubArrayHelperFunction(int A[], int left, int right) {
        if(right == left) return A[left];
        int middle = (left+right)/2;
        int leftans = maxSubArrayHelperFunction(A, left, middle);
        int rightans = maxSubArrayHelperFunction(A, middle+1, right);
        int leftmax = A[middle];
        int rightmax = A[middle+1];
        int temp = 0;
        for(int i=middle;i>=left;i--) {
            temp += A[i];
            if(temp > leftmax) leftmax = temp;
        }
        temp = 0;
        for(int i=middle+1;i<=right;i++) {
            temp += A[i];
            if(temp > rightmax) rightmax = temp;
        }
        return max(max(leftans, rightans),leftmax+rightmax);
    }
};
 */

function maxSubArray(nums, n)
{
    if (nums.length==0) return 0;
    return maxSubArrayHelperFunction(nums, 0, n-1);
}

function maxSubArrayHelperFunction(nums, left, right){
    if (right == left) return nums[left];
    let middle = Math.floor((left+right)/2);
    let leftAns = maxSubArrayHelperFunction(nums, left, middle);
    let rightAns = maxSubArrayHelperFunction(nums, middle+1, right);
    let leftMax = nums[middle];
    let rightMax = nums[middle+1];
    let temp = 0;
    for (let i = middle; i >= left; i--){
        temp += nums[i];
        if (temp > leftMax) leftmax = temp;
    }
    temp = 0;
    for (let i = middle+1; i <= right; i++){
        temp += nums[i];
        if (temp > rightMax) rightMax = temp;
    }
    return Math.max(Math.max(leftAns,rightAns), leftMax+rightMax);
}

console.log("Max Sub Array 1", maxSubArray([1,3,9,-2], 4));

function maxSubArray2(arr, n){
    if (n == 1)
    {
        return arr[0];
    }
    let m = Math.floor(n/2);
    let left_MSS = maxSubArray2(arr.slice(0,m), m);
    let right_MSS = maxSubArray2(arr.slice(m), n-m);
    let leftsum = Number.MIN_VALUE;
    let rightsum = Number.MIN_VALUE;
    let sum = Number.MIN_VALUE;
    for (let i = m; i < n; i++){
        sum += arr[i];
        rightsum = Math.max(rightsum, sum);
    }
    for (let i = (m-1); i >= 0; i--){
        sum += arr[i];
        leftsum = Math.max(leftsum, sum);
    }
    let ans = Math.max(left_MSS, right_MSS);
    return Math.max(ans,leftsum+rightsum);
  

}

console.log("Max Sub Array 2 : ", maxSubArray2([3,-2,5,-1],4));

/* O(n) - kadanes algorithm
 */





