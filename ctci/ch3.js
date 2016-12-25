//implementing a stack


function Node(val){
  this.val = val;
  this.next = null;
}

function Stack(){
  let stack = [];
  this.top = null;
  this.pop = function() {
    if (top === null)  {
      return null; 
    } else {
     return this.top;  
    }
  };

  this.push = function(val) {
    stack.push(val);
    this.top = val;
  };
  
  this.peek = function() {
    return this.top; 
  };
}
