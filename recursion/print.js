//Print out a string recursively
function print(s) {
  console.log(s[0]);
  print(s.slice(1))
  return;
}

console.log("ABCD");

/*
 * This is a top-down, structural approach
 * We pass in a smaller subset of the original structure -> first to end of string
 */

function factorial(n) {
  if (n === 0)
    return 1;
  return n * factorial(n-1);
}

function fib(n) {
  if (n <=1 ) return n;
  return fib(n-1) + fib(n-2);
}

/*
 * This is structural where the number is the structure 
 * The depth is bound by the end of the substructure.
 */


function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b )
}
/*
 * This is generative since the result is computed from the arguments rather than 
 * a successive number of calls.
 * There is no guarantee that generative algorithms terminate.
 */


function printFlatObj(obj) {
  if (Object.keys(obj).length === 0) {
    return;
  }
  //Here we identify a k,v pair as the substructure
  //For simplicity we use object.keys
  const firstKey = Object.keys(obj)[0];
  console.log(firstKey, obj[firstKey])
  delete obj[firstKey];
  printFlatObj(obj);
}

const obj = {a:1, b:2, c:3, d:4}
console.log(printFlatObj(obj));


const deepObj = {a:1, b: {c : 3, d:4}, e: 5}
function printDeepObj(obj) {
  if (Object.keys(obj).length === 0) {
    return;
  }
  const firstKey = Object.keys(obj)[0];

  if (typeof(obj[firstKey]) === 'object') {
    console.log(firstKey)
    printDeepObj(obj[firstKey]);
    delete obj[firstKey];
    printDeepObj(obj);
    return;
  }
  console.log(firstKey, obj[firstKey])
  delete obj[firstKey];
  printDeepObj(obj);
}

console.log("attempting deep obj")
console.log(printDeepObj(deepObj));


function printDeepObjAdjustKeys(obj){


  helper(obj, '');
}

function helper(obj, key) {

  if (Object.keys(obj).length === 0) {
    return;
  }

  const firstKey = Object.keys(obj)[0];

  if (key !== '') {
    keyToPrint = `${key}.${firstKey}`
  } else {
    keyToPrint = firstKey; 
  }

  if (typeof(obj[firstKey]) === 'object') {
    console.log(firstKey);
    //1. pass in (f) with f
    //2. pass in (g) with g
    helper(obj[firstKey], keyToPrint)
    delete obj[firstKey];
    helper(obj, '');
    return;
  }

  console.log(keyToPrint, obj[firstKey]);
  delete obj[firstKey];
  helper(obj, key)
}

console.log("attempting")
const deepObj2 = {a:1, b: {c : 3, d:4}, e: 5}
const deepObj3 = {a:1, b: {c : 3, d:4}, e: 5, f: { g : { h : 6, i: 7}, j: {"" : 8}}}
// f.j: 8
console.log(printDeepObjAdjustKeys(deepObj3));

function flatObjPrintHandleEmpty(obj) {
  helper3(obj,'');
}

function helper3 (obj, key) {
  if (Object.keys(obj).length === 0) {
    return;
  }

  const firstKey = Object.keys(obj)[0];

  if (firstKey === "") {
    console.log('found it');
    keyToPrint = `${key}`;
  } else if (key !== "") {
    keyToPrint = `${key}.${firstKey}`;
  } else {
    keyToPrint = firstKey; 
  }

  if (typeof(obj[firstKey]) === 'object') {
    console.log(firstKey);
    //1. pass in (f) with f
    //2. pass in (g) with g
    helper3(obj[firstKey], keyToPrint)
    delete obj[firstKey];
    helper3(obj, '');
    return;
  }

  console.log(keyToPrint, obj[firstKey]);
  delete obj[firstKey];
  helper3(obj, key)
}

console.log("#4")
const deepObj4 = {a:1, b: {c : 3, d:4}, e: 5, f: { g : { h : 6, i: 7}, j: {k : {"": 8}}}}
console.log(flatObjPrintHandleEmpty(deepObj4));

function recurseObj(obj, newObj, set) {
  const set = new Set();
  for (let key of obj) {
    console.log(key, obj[key]);
    break; 
  }
}
/*
 * function flattenDictionary(dict):
    flatDictionary = {}
    flattenDictionaryHelper("", dict, flatDictionary)

    return flatDictionary


function flattenDictionaryHelper(initialKey, dict, flatDictionary):
    for (key : dict.keyset()):
        value = dict.get(key)

        if (!isDictionary(value)): # the value is of a primitive type
            if (initialKey == null || initialKey == ""):
                flatDictionary.put(key, value)
            else:
                flatDictionary.put(initialKey + "." + key, value)
        else:
            if (initialKey == null || initialKey == "")
                flattenDictionaryHelper(key, value, flatDictionary)
            else:
                flattenDictionaryHelper(initialKey + "." + key, value, flatDictionary
 *
 */

function main(dict) {
  let flatDict = {};
  flattenDictionaryHelper("", dict, flatDict)
  return flatDict;
}


function flattenDictionaryHelper(initialKey, dict, flatDict) {
  for (let key in dict) {
    let val = dict[key];
    //primitive
    if (typeof(val) !== 'object') {
      if (initialKey == null || initialKey == "")  {
        flatDict[key] = val;
      } else {
        flatDict[initialKey+"."+key] = val;
      }
    //object
    } else {
      console.log("!!",initialKey)
      if (initialKey === null || initialKey === undefined || initialKey === "")  {
        flattenDictionaryHelper(key, val, flatDict);
      } else {
        flattenDictionaryHelper(initialKey + "." + key, val,flatDict) 
      }
    }
  }
}

const deepObj5 = {a:1, b: {c : 3, d:4}, e: 5, f: { g : { h : 6, i: 7}, j: {k : {"": 8}}}}
console.log(main(deepObj5));

/*
 * In this way this is bottom-up (accumulator)
 * The substructures are actually the objects by level
 * Outer level, inner level, inner-inner level
 */
