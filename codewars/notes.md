#Are Arrow Functions Odd?
```
function odds(values){
  // arrow it
  return values.filter( val =>val % 2 !== 0);

```
* Arrow Functions and anonymous functions
* Filter is of array.prototype.filter
* == vs ===
* &1 to check last bit

#Sum of positive
```
function positiveSum(arr) {
	var filtered = arr.filter ( num => num > 0);
	return filtered.reduce((a,b) => a+b, 0);
}
```
* Arrow anonymous functions
* Using Reduce

#Disemvowel
```
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}
```

#Using .replace and .match











