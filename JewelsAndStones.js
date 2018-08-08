/*
You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:

Input: J = "aA", S = "aAAbbbb"
Output: 3
Example 2:

Input: J = "z", S = "ZZ"
Output: 0

Note:
S and J will consist of letters and have length at most 50.
The characters in J are distinct.
*/

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */

// Find the different characters in J, since all are distinct, they're all unique.
// Iterate through S to match em.
// Turn J into an array
var numJewelsInStones = function(J, S) {
    const types = J.split('');
    const stones = S.split('');
    const reduceFunc = (acc, el) => {
        return types.includes(el) ? acc + 1 : acc;
    }
    return stones.reduce(reduceFunc, 0);
};

const _numJewelsInStones = (J, S) => {
    const jewels = new Set(J);
    return S.split('').reduce((acc, val) => acc + jewels.has(val), 0);
}

/*
 * Notes:
 * Sets - contain unique values
 * Reduce handles empty lists
 * Can construct Sets from any iterable
 * booleans can be added in JS -- true casts to a value of 1
 */
