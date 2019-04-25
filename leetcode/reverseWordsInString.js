// with lib
var reverseWords = function(str) {
    const whitespace = /\s+/;
    const words = str.split(whitespace);
    return words.reverse().join(' ').trim()
    
};

var reverse = function(s) {
    let l = 0, r = s.length - 1;
    while (l < r) {
        let tmp = s[l];
        s[l] = s[r];
        s[r] = tmp;
        l++;
        r--;
    }
    return s;
}


//92ms
var reverseWordsv1 = function(str) {
    // reverse whole string as array
    str = str.split('').reverse();
    let res = [];
    for (let i = 0; i < str.length; i++) {
        // find the beginning of first word
        while (str[i] === " ") {
            i++; 
        }
        if (i === str.length) break;
        
        // find end of word
        let j = i;
        while (str[j] !== ' ' && j !== str.length) {
            j++;
        }
        res.push(reverse(str.slice(i, j)).join(''));
        i = j;
    }
    return res.join(' ');
}

var reversePure = function(str) {
    let res = "";
    for (let i = str.length - 1; i>=0; i--) {
        res += str[i];
    }
    return res;
}

// Reversing using reversePure, no array except for res
// 76ms
var reverseWordsv2 = function(str) {
    // reverse whole string as array
    str = reversePure(str);
    let res = [];
    for (let i = 0; i < str.length; i++) {
        // find the beginning of first word
        while (str[i] === " ") {
            i++; 
        }
        if (i === str.length) break;
        
        // find end of word
        let j = i;
        while (str[j] !== ' ' && j !== str.length) {
            j++;
        }
        res.push(reversePure(str.substring(i, j)));
        i = j;
    }
    return res.join(' ');
}


//64 ms
// No reverse helper, decrement for loop (sliding window-esque)
var reverseWordsv3 = function(str) {
    const res = [];
    for (let i = str.length - 1; i>= 0; i--) {
        while (str[i] === " ") i--;
        if (i === -1) break;
        
        let j = i;
        while (str[j] !== ' ' && j !== -1) j--;
        
        res.push(str.substring(j+1, i+1));
        i = j;
    }
    return res.join(' ');
}


// 76 ms
//no reverse helper, no arrays
var reverseWords = function(str) {
    let res = "";
    for (let i = str.length - 1; i>= 0; i--) {
        while (str[i] === " ") i--;
        if (i === -1) break;
        
        let j = i;
        while (str[j] !== ' ' && j !== -1) j--;
        
        res = res.concat(str.substring(j+1, i+1) + ' ');
        i = j;
    }
    //erase the last space
    return res.substring(0, res.length-1)
}

