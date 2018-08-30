//moving left to right indices are always increasing therefore 0 is going to be whats in the map.
function getIndicesOfItemWeights(arr, limit) {
  const complementMap = new Map();
  const res = [];
  for (let i = 0; i < arr.length; i++){
    const complement = limit - arr[i];
    if (complementMap.has(arr[i])) {
      // res.push(i, complementMap.get(arr[i]));
      //moving left to right indices are always increasing therefore 0 is going to be whats in the map.
      res[1] = i
      res[0] = complementMap.get(arr[i]);
    } else {
      complementMap.set(complement, i);
    }
  }
  return res.length === 0 ? [] : res.sort((a, b) => b - a);
}

