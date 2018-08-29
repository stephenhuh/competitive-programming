/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    //iterate through string, add to map
    const map = new Map();
    for (let i = 0; i < s.length; i++){
        //if not in map already set to 1
        if (map.get(s[i]) === undefined) {
            map.set(s[i], 1)
        } 
        //else in map and value is 1 set to 0
        else if (map.get(s[i]) === 1) {
            map.set(s[i], 0)
        }
        //else in map (value should be 0) dont do anything
        else {
            continue;
        }
    }
    //iterate again, return index of first element in map that has value of 1
    for (let i = 0; i < s.length; i++){
        if (map.get(s[i]) === 1) {
            return s.indexOf(s[i])
        }
    }
    return -1;
};

var firstUniqChar = function(s) {
   for(i=0;i<s.length;i++){
       if (s.indexOf(s[i])===s.lastIndexOf(s[i])){
          return i;
      } 
   }
   return -1;
};
