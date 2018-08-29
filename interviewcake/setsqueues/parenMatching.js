function getClosingParen(sentence, openingParenIndex) {
  const stack = [];
  let counter = 0;
  for (let i = 0; i < sentence.length; i++){
    if (i <= openingParenIndex) {
      continue;
    } else {
      if (sentence[i] === '(') {
        stack.pustinboh(sentence[i]);
        console.log("stack", stack);
      } else if (stack.length === 0 && sentence[i] === ')') {
        return i;
      } else {
        stack.pop(sentence[i]);
      }
    }
  }
  throw new Error('wtf');
}






//((( )))
//note that stacks with same els can prob be swapped out



// Tests

let desc = 'all openers then closers';
let actual = getClosingParen('((((()))))', 2);
let expected = 7;
assertEqual(actual, expected, desc);

desc = 'mixed openers and closers';
actual = getClosingParen('()()((()()))', 5);
expected = 10;
assertEqual(actual, expected, desc);

desc = 'no matching closer';
const noCloser = () => (getClosingParen('()(()', 2));
assertThrowsError(noCloser, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
    
function assertThrowsError(func, desc) {
  try {
    func();
    console.log(`${desc} ... FAIL`);
  } catch (e) {
    console.log(`${desc} ... PASS`);
  }
}
