function evalRPN(tokens) {
  const stack = [];
  
  for (let token of tokens) {
    if (token === '+') {
      stack.push(stack.pop()+stack.pop());
    } else if (token === '-') {
      stack.push(-stack.pop()+stack.pop());
    } else if (token === '*') {
      stack.push(stack.pop()*stack.pop());
    } else if (token === '/') {
      stack.push(Math.trunc(1/stack.pop()*stack.pop()));
    } else {
      stack.push(parseInt(token));
    }
  }
  
  return stack[0];
}

const checkSymbol = (char) => char === '+' || char === '-' || char === '/' || char === '*';
function evalRPN(tokens) {
  const computeStack = [];
  for (let token of tokens) {
    computeStack.push(token);
    const top = computeStack[computeStack.length-1]
    
    if (top === '+') {
        computeStack.pop()
        computeStack.push(parseInt(computeStack.pop()) + parseInt(computeStack.pop()));
    } else if (top === '-') {
        // NOT commutative: a - b
        computeStack.pop();
        const b = parseInt(computeStack.pop());
        const a = parseInt(computeStack.pop());
        computeStack.push(a - b);
    } else if (top === '*') {
        computeStack.pop();
        computeStack.push(parseInt(computeStack.pop()) * parseInt(computeStack.pop()));
    } else if (top === '/') {
        computeStack.pop();
        // NOT commutative: a / b
        const b = parseInt(computeStack.pop());
        const a = parseInt(computeStack.pop())
        computeStack.push(Math.trunc(a / b))
    }
  }
  
  return computeStack[0];
}
