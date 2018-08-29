//  Implement the enqueue and dequeue methods

class QueueTwoStacks {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }
  enqueue(item) {
    this.stack1.push(item);
  }

  dequeue() {
    //First check if stack2 is empty
    if (this.stack2[0] === undefined) {
      //empty stack1 into stack2
      while (this.stack1[0] !== undefined) {
        const el = this.stack1.pop();
        this.stack2.push(el);
      }
    }
    
    //even after emptying if stack2 is empty return undefined;
    if (this.stack2[0] === undefined) {
      throw new Error('dequeueing empty queue')
    }
    const res = this.stack2.pop();    
    return res;
  }
}






// Tests
const q = new QueueTwoStacks();

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);

let desc = 'dequeue #1';
let actual = q.dequeue();
let expected = 1;
assertEquals(actual, expected, desc);

desc = 'dequeue #2';
actual = q.dequeue();
expected = 2;
assertEquals(actual, expected, desc);

q.enqueue(4);

desc = 'dequeue #3';
actual = q.dequeue();
expected = 3;
assertEquals(actual, expected, desc);

desc = 'dequeue #4';
actual = q.dequeue();
expected = 4;
assertEquals(actual, expected, desc);

desc = 'dequeue from empty queue';
const emptyDequeue = () => q.dequeue();
assertThrowsError(emptyDequeue, desc);

function assertEquals(a, b, desc) {
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
