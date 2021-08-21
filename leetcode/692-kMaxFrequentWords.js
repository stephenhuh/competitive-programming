/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    const map = new Map();
    for (let word of words) {
        if (map.has(word)) {
            const count = map.get(word);
            map.set(word, count+1);
        } else {
            map.set(word, 1);
        }
    }
    // i:2, love: 2, coding: 1, leetcode: 1
    const result = [];
    let highestCount = Number.MIN_SAFE_INTEGER;
    let highestWord = null;
    //k = 
    //
    while (k--) {
        // TODO: optimize
        for (let [word, count] of map.entries()) {
            if (highestCount <= count) {
                if (highestCount === count) {
                    highestCount = count;
                    highestWord = highestWord < word ? highestWord : word;
                } else {
                    highestCount = count;
                    highestWord = word;
                }            }
        }
        result.push(highestWord);
        map.delete(highestWord);
        highestCount = Number.MIN_SAFE_INTEGER;
    }
    return result;
};
