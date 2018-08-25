/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    /*
        8700ms
        Basic sol'n:
        Find maximum of list, min is 1.
        Count up from 1 to that max, pushing anything to result if it doesn't exist inlist
    */
    let max = nums.length;
    let x = [];
    for (let i = 1; i <= max; i++ ){
        if (nums.indexOf(i) === -1) {
            x.push(i);
        }
    }
    return x;
};

/**
 * @param {number[]} nums
 * 8448 ms
 */
var findDisappearedNumbers = function(nums) {
    /*
        Basic sol'n:
        Find maximum of list, min is 1.
        Count up from 1 to that max, pushing anything to result if it doesn't exist inlist
    */
    let max = nums.length;
    let x = new Set();
    for (let i = 1; i <= max; i++ ){
        if (x.has(i)) {
            continue;
        }
        if (nums.indexOf(i) === -1) {
            x.add(i);
        }
    }
    return Array.from(x);
};

var findDisappearedNumbers = function (nums) {
  let length = nums.length
  let arr = []
  for (let i = 0; i < length; i++) {
    arr[i] = i+1
  }
  for (v of nums) {
    arr[v-1] = -1
  }
  return arr.filter( i => (i > 0) )
}
