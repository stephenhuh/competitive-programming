const v1BruteForce = (s1, s2) => {
  let maxLen = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < s1.length; i++) {
    const char1 = s1[i];
    for (let j = 0; j < s2.length; j++) {
      const char2 = s2[j];
      //console.log('char1', char1, 'char2', char2)
      if (char1 === char2) maxLen = v1Helper(s1,i,s2,j, maxLen);
    }
  }
  return maxLen;
}

const v1Helper = (s1, i, s2, j, maxLen) => {
  //console.log('init');
  let currLen = 0;
  while (s1[i] == s2[j]) {
    i++;
    j++;
    currLen++;
  }
  if (currLen > maxLen) return currLen;
  else return maxLen;
}



const v2BruteForce = (s1, s2) => {
  let maxLen = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < s1.length; i++) {
    const char1 = s1[i];
    for (let j = 0; j < s2.length; j++) {
      const char2 = s2[j];
      if (char1 === char2) {
        let currLen = 0;
        let a = i;
        let b = j;
        while (s1[a] == s2[b]) {
          a++;
          b++;
          currLen++;
        }
        if (currLen > maxLen) {
          maxLen = currLen;
        }
      }
    }
  }
  return maxLen;
}

const v3Recurse  = (s1, s2) => {
  let maxLen = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < s1.length; i++) {
    const char1 = s1[i];
    for (let j = 0; j < s2.length; j++) {
      const char2 = s2[j];
      if (char1 === char2) {
        const currLen = recurse(s1, i, s2, j, 0);
        if (currLen > maxLen) {
          maxLen = currLen;
        }
      }
    }
  }
  return maxLen;
}

const recurse = (s1, i, s2, j, currLen) => {
  if (i >= s1.length && j >= s2.length) return 0;
  if (s1[i] = s2[j]) {
    currLen = recurse(s1, i+1, s2, j+1, currLen+1);
  }
  return currLen;
}

const main = () => {
  const a = v1BruteForce("abcdxyz", "xyzabcd");
  const b = v2BruteForce("abcdxyz", "xyzabcd");
  const c = v3Recurse("abcdxyz", "xyzabcd");
  console.log(`**RESULTS**
    ${a} 
    ${b}
    ${c}
  **END**`);
}

//Recurrence relation: lcs(abcdxyz, xyzabcd) = 

main();



