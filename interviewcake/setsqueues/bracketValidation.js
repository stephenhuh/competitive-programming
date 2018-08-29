function isValid(code) {

  // Determine if the input code is valid
  //(
  //)
  const stack = [];
  const matchOpener = (c) => c === '(' || c === '{' || c === '[';
  const matchCloser = (c) => c === ')' || c === '}' || c === ']'
  const isMatch = (a, b) => {
    if (a === '(' && b === ')') return true;
    if (a === '{' && b === '}') return true;
    if (a === '[' && b === ']') return true;
  }
  for (let i = 0; i < code.length; i++){
    const char = code[i];
    if (matchOpener(char)) {
      stack.push(char);
    } else if (matchCloser(char) && stack.length > 0) {
      const opener = stack.pop(char);
      if (!isMatch(opener, char)) return false;
    } else if (matchCloser(char) && stack.length === 0) {
      return false;
    }
  }
  //stack is full though we're at end of sentence
  if (stack.length === 0) return true;
  
  return false;
}

//Can create a set from an array as follows
new Set(['(', '[', '{']);
new Set([')', ']', '}']);
/*
  naming the purpose of your variables is useful
  if theres an if else statement at end of funcion
  if (stack.length === 0) return true,
  we can just return the condition itself
  return stack.length === 0;
  //TODO: read up on set constructors
  //TODO: read up on closures.
  //TODO: memorize, if doing tree or graph traversal (depth first) can use a stack or parsing.
*/

//]]

const testClosure = () => a;
function test() {
  a = '3'
  return testClosure();
}
console.log("TESTER",test());













// Tests

let desc = 'valid short code';
assertEqual(isValid('()'), true, desc);

desc = 'valid longer code';
assertEqual(isValid('([]{[]})[]{{}()}'), true, desc);

desc = 'mismatched opener and closer';
assertEqual(isValid('([][]}'), false, desc);

desc = 'missing closer';
assertEqual(isValid('[[]()'), false, desc);

desc = 'extra closer';
assertEqual(isValid('[[]]())'), false, desc);

desc = 'empty string';
assertEqual(isValid(''), true, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
