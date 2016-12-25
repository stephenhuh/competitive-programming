(function(a,b,c){
  console.log("a is...", a);
  console.log("b is...", b);
  console.log("c is...", c);
}).apply(null, "hellothere".toArray());
