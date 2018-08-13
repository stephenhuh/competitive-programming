//Remember in nested forloops, both iterate across.
function bruteForceGetMaxProfit(stockPrices) {
  let maxProfit = 0;
  
  for (let outerTime = 0; outerTime < stockPrices.length; outerTime++){
    for (let innerTime = 0; innerTime < stockPrices.length; innerTime++){
      const earlierTime = Math.min(outerTime, innerTime);
      const laterTime = Math.max(outerTime, innerTime);
      
      const earlierPrice = stockPrices[earlierTime];
      const laterPrice = stockPrices[laterTime];
      
      const potentialProfit = laterPrice - earlierPrice;
      maxProfit = Math.max(maxProfit, potentialProfit);
    }
  }
  return maxProfit;
}

//Looking at every pair twice. 1:00, 2:00 compared with 2:00, 1:00
function bruteForcev2(stockPrices) {
  let maxProfit = 0;
  
  for (let earlierTime = 0; earlierTime < stockPrices.length; earlierTime++){
    const earlierPrice = stockPrices[earlierTime];
    for (let laterTime = earlierTime + 1; laterTime < stockPrices.length; laterTime++){
      const laterPrice = stockPrices[laterTime];
      
      const potentialProfit = laterPrice - earlierPrice;
      
      maxProfit = Math.max(maxProfit, potentialProfit);
    }
  }
  return maxProfit;
}

function greedy(stockPrices) {
  let minPrice = stockPrices[0];
  let maxProfit = 0;
  
  for (let i = 0; i < stockPrices.length; i++){
    const currentPrice = stockPrices[i];
    
    minPrice = Math.min(minPrice, currentPrice);
    const potentialProfit = currentPrice - minPrice;
    maxProfit = Math.max(maxProfit, potentialProfit);
  }
  
  return maxProfit;
}

function greedyv2(stockPrices) {
  if (stockPrices.length < 2) {
    throw new Error('need at least 2 prices');
  }
  let minPrice = stockPrices[0];
  let maxProfit = stockPrices[1] - stockPrices[0];
  
  for (let i = 0; i < stockPrices.length; i++){
    const currentPrice = stockPrices[i];
    
    minPrice = Math.min(minPrice, currentPrice);
    const potentialProfit = currentPrice - minPrice;
    maxProfit = Math.max(maxProfit, potentialProfit);
  }
  
  return maxProfit;
}


function getMaxProfit(stockPrices) {
  if (stockPrices.length === 1){
    throw new Error('need more than one price')
  } else if (stockPrices.length === 0) {
    throw new Error('empty stockPrices');
  }
  

  // Calculate the max profit
  const min = Math.min.apply(null, stockPrices);
  const minI = stockPrices.indexOf(min);
  const iter = 0;
  
  //Sorted array
  function getMax(stockPrices, iter) {
    const sortedPrices = stockPrices.slice(0).sort();
    const max = sortedPrices[sortedPrices.length-1-iter];
    const maxI = stockPrices.indexOf(max);
      
    //Ensure that the minimum is before the max?
    if (minI < maxI) {
      return max - min;
      //indicates that max is behind min for whole time.
    } else if (minI === maxI) {
      return 0;
    } else {
      return getMax(stockPrices, iter+1);
    }
    //Any cases in which this is not true?
    //This doesnt work if we have multiple same values or
    //5 5 5 0
    //Or if prices go down all day.
    //Need to handle empty and single prices.
  }
  
  return getMax(stockPrices, iter);
}


















// Tests

let desc = 'price goes up then down';
let actual = getMaxProfit([1, 5, 3, 2]);
let expected = 4;
assertEqual(actual, expected, desc);

desc = 'price goes down then up';
actual = getMaxProfit([7, 2, 8, 9]);
expected = 7;
assertEqual(actual, expected, desc);

desc = 'price goes up all day';
actual = getMaxProfit([1, 6, 7, 9]);
expected = 8;
assertEqual(actual, expected, desc);

desc = 'price goes down all day';
actual = getMaxProfit([9, 7, 4, 1]);
expected = -2;
assertEqual(actual, expected, desc);

desc = 'price stays the same all day';
actual = getMaxProfit([1, 1, 1, 1]);
expected = 0;
assertEqual(actual, expected, desc);

desc = 'error with empty prices';
const emptyArray = () => (getMaxProfit([]));
assertThrowsError(emptyArray, desc);

desc = 'error with one price';
const onePrice = () => (getMaxProfit([1]));
assertThrowsError(onePrice, desc);

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
