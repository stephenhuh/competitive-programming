//profit builds on subprofits thus can use greedy approach
//only check if price is going up
var maxProfit = function(prices) {
      let profit = 0;
      for (let i = 0; i < prices.length - 1; i++) {
                if (prices[i + 1] > prices[i]) {
                              profit += (prices[i+1] - prices[i]);
                          }
            }
      return profit;
};o

