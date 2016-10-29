var coinChange = function(coins, amount) {
    /*
    
    Set Min[i] equal to Infinity for all of i
    Min[0]=0

    For i = 1 to S
    For j = 0 to N - 1
      If (Vj<=i AND Min[i-Vj]+1<Min[i])
    Then Min[i]=Min[i-Vj]+1

    Output Min[S]
    */
    
    let min = Array.apply(null, Array(amount+1)).map(Number.prototype.valueOf,Number.MAX_SAFE_INTEGER);
    min[0] = 0;
    
    for (let i = 1; i <= amount; i++){
    
        for (let j = 0; j < coins.length; j++){
            if (coins[j] <= i && min[i - coins[j]] + 1 < min[i]){
                min[i] = min[i-coins[j]] + 1;
            } 
        }
    }
    return min[amount] === Number.MAX_SAFE_INTEGER ? -1 : min[amount];

};
