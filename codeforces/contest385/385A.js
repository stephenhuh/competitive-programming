"use strict";
Array.prototype.contains = function(el){
  return this.indexOf(el) > -1;
};

var rotateArray = function rotateArray(arr){ 
  arr.unshift(arr.pop());
  return arr;
};

print(function(input){ 
  input = input.split('');
  var len = input.length;
  var arr = [];
  var i = 0;
  var count = 0;
  while (i < len) {
    //print(i, len);
    input = rotateArray(input); 
    var add = input.join('');
    if (!arr.contains(add)){
      count++; 
      arr.push(add);
      //print("we here with", input);
      //print(arr);
    }
    i++;
  }
  return count;
}.apply(null, readline().split(" ")));

