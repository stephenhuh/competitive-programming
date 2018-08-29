/* INVAID */
function findArrayQuadruplet(arr, s) {
  arr.sort();
  const pairs = [];
  for (let i = 0; i < arr.length; i++){
    //looking for a subtarget 
    for (let j = i+1; j < arr.length; j++){
      pairs.push([arr[i], arr[j], arr[i]+arr[j]]);
    }
  }
  let target;
  
  //second part target16
  // {16: 0, 15: 1, 14: 2}
  const complements = new Map();
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (complements.get(num) === 'undefined') {
      complements.set(target - num, num);
    } else {
      res.push(num, complements.get(target-num))  
    }
  }
  return res.sort(); 
}


function findArrayQuadruplet(arr, s) {
  let n = arr.length;
  if (n < 4) return [];
  
  arr.sort((a,b) => a -b); //sort doesnt work out of the box for numbers
  
  for (let i = 0; i <= n-4; i++){
    for (let j = i+1; j <= n-3; j++){
      let r = s - (arr[i] + arr[j]);
      let low = j + 1;
      let high = n -1;
      while (low < high) {
        if (arr[low] + arr[high] < r) {
          low++;
        } else if (arr[low] + arr[high] > r) {
          high--;
        } else {
          let x = [arr[i], arr[j], arr[low], arr[high]]
          return (x);
        }
      }
    }
  }
  return [];
}


