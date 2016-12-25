**Linked List Iteration**
1. finding length of linked list
2. finding count of a type of node val
3. inserting a node at any point

**Linked List Recursion**
1. finding length of linked list
2. finding count of a type of node val
3. inserting a node at any point

#How to find if one string contains another substring?
    use String.prototype.indexOf()
#What are the four ways to typecast to a Number?
    1. Number(x);
    2. parseInt(x, 10);
    3. parseFloat(x);
    4. +x;
#Search for numbers within a string?
    string.match(/\d+/g);
#find sum of an arithmetic sequence of numbers?
    first + last * n / 2
#find sum of arithmetic sequence with diff of 1?
    n*n+1 / 2
#how to find if one string contains another substring?
    use String.prototype.indexOf()
#typecast to a number?
    1. Number(x);
    2. parseInt(x, 10);
    3. parseFloat(x);
    4. +x;
#Why do we use math.max.apply(null, arr) to find maximum of an array?
 .apply  allows you to pass an array as an argument thereby allowing you to treat each element as an argument
#How to remove an index from an array with no empty slots aka dense array?
  use `array.splice(index, 1)`
#How to check if a number is finite aka not of infinity?
  isFinite() is a global function that can be used
#[] == []?
FALSE
#A for loop across an array goes from indices...?
from 0 to the length -1, because it does not iterate on length index (invalid)
BUT the code within that for loop executes before the last index so it will execute one last time
```
for (let i = 0; i < 5; i++){
  console.log(i);  
}
returns....?? 0,1,2,3,4 --> executes 5 times in total

for (let i = 1; i <= 5; i++){
  console.log(i);  --> executes 4 times in total
}
returns...?

for (let i = 0; i < 10; i++){

}
```
#~~ in JS does what?
Turns floating point to integer
#how is method chaining achieved?
return `this` from that method
#.prototype.function as opposed to Number.function should be handled differently how?

#how to deep copy without lodash?
#for loop from one end to the other should be j+1
#arrays cannot be equality checked
#shallow copy with .slice();
#how to find the max of anything?
hold the max and compare each time








