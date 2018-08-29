
class Stack {
  constructor() {

    // Initialize an empty array
    this.items = [];
  }

  // Push a new item to the last index
  push(item) {
    this.items.push(item);
  }

  // Remove the last item
  pop() {

    // If the stack is empty, return null
    // (It would also be reasonable to throw an exception)
    if (!this.items.length) {
      return null;
    }
    return this.items.pop();
  }

  // See what the last item is
  peek() {
    if (!this.items.length) {
      return null;
    }
    return this.items[this.items.length - 1];
  }
}
// Implement the push, pop, and getMax methods
/*
class MaxStack extends Stack {
  constructor() {
    super();
    this.maxSoFar = Number.NEGATIVE_INFINITY;
    this.stackB = new Stack();
  }

  push(item) {
    console.log("MAXSOFAR", this.maxSoFar)
    console.log("ITEMS",this.items);
    console.log("STACKB", this.stackB);
    if (item >= this.maxSoFar) {
      this.maxSoFar = item;
      this.stackB.push(item);
      this.items.push(item);
    } else {
      this.items.push(item);
    }
  }

  pop() {
    console.log("MAXSOFAR", this.maxSoFar)
    console.log("ITEMS",this.items);
    console.log("STACKB", this.stackB);
    if (!this.items.length) {
      return null;
    }
    let item = this.items.pop();
    if (item == this.maxSoFar) {
      this.stackB.pop();
      this.maxSoFar = this.stackB.peek();
    }
    return item
  }

  getMax() {
    return this.stackB.peek();
  }
}
*/
class MaxStack extends Stack {
  constructor() {
    super();
    this.stackB = new Stack();
  }

  push(item) {
    console.log("ITEMS",this.items);
    console.log("STACKB", this.stackB);
    this.items.push(item);
    this.items.push(item);
    if (this.stackB.peek() === null || item >= this.stackB.peek()) {
      this.stackB.push(item);
    }
  }

  pop() {
    console.log("ITEMS",this.items);
    console.log("STACKB", this.stackB);
    if (!this.items.length) {
      return null;
    }
    let item = this.items.pop();
    if (item == this.stackB.peek()) {
      this.stackB.pop();
    }
    return item;
  }

  getMax() {
    return this.stackB.peek();
  }
}




















// Tests

const s = new MaxStack();
s.push(5);

assertEquals(5, s.getMax(), 'check max after 1st push');

s.push(4);
s.push(7);
s.push(7);
s.push(8);

assertEquals(8, s.getMax(), 'check before 1st pop');
assertEquals(8, s.pop(), 'check pop #1');
assertEquals(7, s.getMax(), 'check max after 1st pop');
assertEquals(7, s.pop(), 'check pop #2');
assertEquals(7, s.getMax(), 'check max after 2nd pop');
assertEquals(7, s.pop(), 'check pop #3');
assertEquals(5, s.getMax(), 'check max after 3rd pop');
assertEquals(4, s.pop(), 'check pop #4');
assertEquals(5, s.getMax(), 'check max after 4th pop');

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
