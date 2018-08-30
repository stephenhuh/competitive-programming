/*
  Given an array of unique chars arr and string str
  implement function.
  Basically have two pointers:
  store the last character that is in the set that is to the left, and can shorten when length is exceeded
  
*/

function getShortestUniqueSubstring(arr, str) {
  let headIndex = 0;
  let res = "";
  let uniqueCounter = 0;
  let countMap = new Map();
  
  //Fill up the map with 0 for all unique characters we're searching for
  for (let i = 0; i < arr.length; i++) {
    countMap.set(arr[i], 0);
  }
  
  //tail is right, head is left. iterate the right pointer until we have all the unique characters 
  //when we do attempt to push head until we dont.
  for (let tailIdx = 0; tailIdx < str.length; tailIdx++) {
    const tailChar = str[tailIdx];
    if (countMap.has(tailChar) === false) {
      continue;
    }
    let tailCount = countMap.get(tailChar);
    
    if (tailCount === 0) {
      uniqueCounter += 1;
    }
    //Have all necessary characters.
    while (uniqueCounter == arr.length):
      let tempLength = tailIndex - headIndex + 1;
      //if this passes we know that we have all characters at a minimum length as counter is equal to arr length
      //and so is our string.
      if (tempLength == arr.length) {
        return str.susbtring
      }
      //if theres no result thus far or if its shorter than our current sol'n, save it.
      if (result === "" || tempLength < result.length) {
        result = str.substring(headIdx, tailIdx);
      }
      let headChar = str[headIdx];
      //if the character we're trying to exclude is one of the chars we need decrement its count
      if (countMap.has(headChar)) {
        let headCount = countMap.get(headChar) - 1
        //if we no longer have that unique character we needed dec uniqueCounter, thereby breaking out of loop
        if (headCount == 0) {
          uniqueCounter = uniqueCounter - 1;
        }
        countMap.set(headChar, headCount)
        headIdx++;
      }
    
      
  }
}
