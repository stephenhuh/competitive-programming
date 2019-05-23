/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits.length === 0) return [];
    const res = [];
    const map = new Map([
        ["2", "abc"],
        ["3", "def"], 
        ["4", "ghi"],
        ["5", "jkl"],
        ["6", "mno"], 
        ["7", "pqrs"],
        ["8", "tuv"],
        ["9", "wxyz"],
    ]
    );
    const lists = [];
    digits.split('').forEach((digit) => {
        lists.push(map.get(digit));  
    })
    permute(res, lists, "", 0)
    return res;
};

const permute = function(res, lists, s, idx) {
    if (s.length === lists.length) {
        res.push(s);
        return;
    }
    
    for (let i = 0; i < lists[idx].length; i++) {
        s += lists[idx][i]; //a
        permute(res, lists, s, idx+1); // permute
        s = s.slice(0, -1); //backtrack
    }
}
