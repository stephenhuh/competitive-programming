/**
 * flip
 * Flips the first k elements of arr
 * @param arr
 * @param k
 * @returns {undefined}
 */

function flip(arr, k) {
  if (!arr ||  arr.length < 1) {
    return []; 
  }

  let pivot = Math.floor(k/2) //2
  for (let i = 0; i < pivot; i++){
    let temp = arr[i]; 
    arr[i] = arr[k - 1 - i];
    arr[k - i - 1] = temp;
  }
  return arr;
}

/*
 * N-1 iterations for sorting
 * iterations have 2 flips, flips are O(N/2) when k is length -> O(N)
 * finding max takes O(N) time
 * 484 ms
 */
function pancakeSort(arr) {
  //Use double flip method
  for (let i = 0; i < arr.length; i++) {
    let max = Math.max.apply(null,arr.slice(0, arr.length-i));
    let maxIdx = arr.slice(0, arr.length-i).indexOf(max);
    console.log("maxIdx", maxIdx);
    flip(arr, maxIdx + 1); //Move to front
    console.log("arr after first flip", arr);
    flip(arr, arr.length - i); //Move to back
    console.log("arr after second flip", arr);
  }
  return arr;
}

/*
 * 450 ms
 */
function pancakeSortv2(arr) {
  for (let i = 0; i < arr.length; i++) {
    let subArr = arr.slice(0, arr.length-i);
    let max = Math.max.apply(null,subArr);
    let maxIdx = subArr.indexOf(max);
    console.log("maxIdx", maxIdx);
    flip(arr, maxIdx + 1); //Move to front
    console.log("arr after first flip", arr);
    flip(arr, arr.length - i); //Move to back
    console.log("arr after second flip", arr);
  }
  return arr;
}

/*
 * 532 ms
 * This is slower because of the iteration to replace elements
 */
function pancakeSortv3(arr) {
  //Move max immediately to the back  
  for (let i = 0; i < arr.length; i++) {
    let max = Math.max.apply(null,arr.slice(0, arr.length-i));
    console.log("max", max);
    let maxIdx = arr.slice(0, arr.length-i).indexOf(max);
    let subArr = arr.slice(maxIdx, arr.length-i);
    flip(subArr, subArr.length); // 
    subArr.forEach((el, idx) => {
      arr[maxIdx + idx] = subArr[idx];
    })
    console.log("subArr", subArr);
    console.log("arr", arr);
  }
  return arr;
}


//General 
/*
console.log(flip([1,2,3], 3));
console.log(flip([1,2,3], 2));
console.log(flip([1,2,3,4], 2));
console.log(flip([1,2,3,4], 3));
console.log(flip([1,2,3,4], 4));
console.log(flip([1,3,1], 2));
console.log("pancake");
console.log("output 1", pancakeSort([2, 1]));
console.log("output 2", pancakeSort([1,3,1]));
console.log("output 3", pancakeSort([1,5,3,1]));
console.log("output 4", pancakeSort([1,8,9,3,1]));

//Edge
console.log(flip([], 3));
console.log(flip(null, 3));
*/

//V3
console.log("output 1", pancakeSortv3([2, 1]));
console.log("output 4", pancakeSortv3([1,8,9,3,1]));

