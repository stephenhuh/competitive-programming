//What type of string is it?
//What kind of characters are used for the string? That is the encoding.
//Is it ASCII compatible? Unicode is ASCII compatible, UTF's are subset of types of Unicode
//
//TOKNOW: 97 - 122 is lowercase ASCII
//        65 - 90 - uppercase ASCII
//        .split does not modify its input (pure)
/**
 * @param {string} 
 * @return {number}
 */

// [1,2,3,4,5,6,7]
var firstUniqChar = function(s) {
  let arr = s.split('');
  let char = new Array(26);
  for (let i = 0, len = arr.length; i < len; i++){
    let charCode = arr[i].charCodeAt(0);
    console.log("your char code is..." + charCode);
    if (arr[charCode] === undefined)
      arr[charCode] = arr[i];
    else return i;
  }
  return -1;
};


console.log(firstUniqChar('leetcode'));
console.log(firstUniqChar('loveleetcode'));


var firstUniqChar = function(s) {
   for(i=0;i<s.length;i++){
       if (s.indexOf(s[i])===s.lastIndexOf(s[i])){
          return i;
      } 
   }
   return -1;
};
