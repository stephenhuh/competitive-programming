/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let result = [];
    
    function dfs(current, start) {
        if(current.length == k) {
            result.push(current);
            return;
        }
        for(let i = start; i <= n; i++) {
            dfs([...current, i], i + 1);
        }
    }
    
    dfs([], 1);
    return result;
};
