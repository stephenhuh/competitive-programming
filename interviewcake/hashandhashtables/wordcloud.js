function myFunction(arg) {

  // write the body of your function here
  

  return 'running with ' + arg;
}


function wordCloud(str) {
  arr = str.split(' ');
  arr = arr.map((word) => word.toLowerCase());
  arr = arr.map((word) => {
    return stripPunctuation(word)
  })
  const res = new Map();
  arr.forEach((word) => {
    console.log("WORD", word);
    if (res.has(word.toLowerCase())) {
      let temp = res.get(word);
      res.set(word.toLowerCase(),++temp);
    } else {
      res.set(word.toLowerCase(), 1)
    }
  })
  return res;
}

function stripPunctuation(str) {
  return str
    .split('')
    .map((char) => {
      if (char.charCodeAt(0) <= 122 && char.charCodeAt(0) >= 97) {
        return char;
      } else {
        return '';
      }
    })
    .join('')
}

// run your function through some test cases here
// remember: debugging is half the battle!
console.log(wordCloud('test input test'));
console.log(wordCloud("After beating the eggs, Dana read the next step:"));
console.log(wordCloud("Add milk and eggs, then add flour and sugar."));

