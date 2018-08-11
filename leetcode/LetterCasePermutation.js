/**
 * @param {string} S
 * @return {string[]}
 */

String.prototype.replaceAt = function(idx, replacement) {
    return this.substr(0, idx) + replacement + this.substr(idx + replacement.length);
}
var letterCasePermutation = function(S) {
    //Split first, find the characters, then calculate the number of combinations possible.
    //Shift from lower to upper.
    const shift = 'A'.charCodeAt(0) - 'a'.charCodeAt(0);
    const acc = [];
    const original = S
    acc.push(S);
    //['a','1','c']
    for (let i = 0; i < S.length; i++) {
        let copy = original;
        if (/[a-z]/.test(S[i])) {
            acc.push(copy.replaceAt(i, S[i].toUpperCase()));
        } else if (/[A-Z]/.test(S[i])){
            copy[i] = (S[i].toLowerCase());
            acc.push(copy.replaceAt(i, S[i].toUpperCase()));
        }
    }
    return acc;
};

/*
 * strings are immutable
 * writing .replaceAt
 * regex start/end with /
 *
 */


const letterCasePermutation = S => {
    const result = [];
    backtracking(S, 0, '', result);
    return result;
};

const backtracking = (S, i, solution, result) => {
    if (i === S.length) {
        result.push(solution);
        return;
    }
    
    backtracking(S, i + 1, solution + S[i].toLowerCase(), result);
    
    if (/[a-zA-Z]/.test(S[i])) {
        backtracking(S, i + 1, solution + S[i].toUpperCase(), result);
    }
};
