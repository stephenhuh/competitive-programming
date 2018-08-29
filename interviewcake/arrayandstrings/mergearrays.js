function myFunction(arg) {

  // write the body of your function here
  

  return 'running with ' + arg;
}


function mergeArrays(myArray, alicesArray) {
  const res = [];
  for (let i = 0, j = 0; i < myArray.length || j < alicesArray.length;){
	//end of array for both
	if (!myArray[i] && !alicesArray[j]) {
		break;
  } else if (!alicesArray[j]) {
		//end of array for j and only j
		res.push(myArray[i]);
		i++;
		continue;
  } else if (!myArray[i]){
		//end of array for i and only i
		res.push(alicesArray[j]);
		j++;
  } else {
    if (myArray[i] >= alicesArray[j]) {
      res.push(alicesArray[j]);
      j++;
    } else {
      res.push(myArray[i]);
      i++;
    }
  }
}
return res;
}

/* NOTE that when you have the same fucking thing inside multiple then blocks, we can join the two cases!! */

function mergeArraysV2(A, B){
  const merged = [];
  var i = 0;
  var j = 0;
  var c = 0;
  
  if (i < j){
    merged[c] = i;
    i++;
  } else {
    merged[i] = 
  }
  
}

function v3 (currentIndexMine, currentIndexAlices){
  var mergedArray = [];
  var currentIndexAlices = 0;
  var currentIndexMine = 0;
  var currentIndexMerged = 0;
  
  while (currentIndexMerged < myArray.length + alicesArray.length){
    var isMyArrayExhausted = currentIndexMine >= myArray.length;
    var isAlicesArrayExhausted = currentIndexAlices >= alicesArray.length;
    if (!isMyArrayExhausted && (isAlicesArrayExhausted || 
        (myArray[currentIndexMine] < alicesArray[currentIndexAlices]))) {
          mergedArray[currentIndexMerged] = myArray[currentIndexMine];
          currentIndexMine++;
    }
  }
  
}

// run your function through some test cases here
// remember: debugging is half the battle!

console.log(mergeArrays([3,4,6,10,11,15],[1,5,8,12,14,15,19]))
console.log(mergeArrays([],[]));
console.log(mergeArrays([1,2],[3,4])) //expect 1,2,3,4
