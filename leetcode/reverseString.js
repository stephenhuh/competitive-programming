const reverse = (s) => {
  s = s.split('');
  const midpoint = Math.floor(s.length / 2);
  for (let i = 0; i < midpoint; i++) {
    let tmp = s[i];
    s[i] = s[s.length - 1 - i];
    s[s.length -1 - i] = tmp;
  }
  return s.join('');
}

//2 pointer recursive method
const reverseRecursive = (s) => {
  s = s.split('');
  s = helper(s, 0, s.length - 1);
  return s.join('');
}

const helper = (s, begin, end) => {
  if (begin === end) {
    return s;
  } else {
    let tmp = s[begin];
    s[begin] = s[end];
    s[end] = tmp;
  }

  return helper(s, begin+1, end-1);
}

var reverseStringv3 = function(s) {   
    helper(s, 0, s.length-1);
};

var helper = function (s, start, end) {
    if (start >= end) {
        return;
    }
    const tmp = s[start];
    s[start] = s[end];
    s[end] = tmp
    
    helper(s, start+1, end-1)
}


var reverseStringv4 = function(s) {
    let l = 0;
    let r = s.length - 1;
    while (l < r) {
        let tmp = s[l];
        s[l] = s[r];
        s[r] = tmp;
        l++;
        r--;
    }
}


// Pure, not-inplace
var reverseDecrement = function(s) {
  let res = "";
  for (let i = s.length - 1; i >= 0; i--) {
    res += s[i]
  }
  return res;
}

