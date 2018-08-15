

var uniqueMorseRepresentations = function(words) {
    const morseCodes = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    
    //Get the indices so we can index into `morseCodes`.
    const converted = words.map((word) => {
        return word.split('').map((char) => {
            return morseCodes[char.charCodeAt(0) - 97]
        }).join('')});
    
    return new Set(converted).size;
};

let uniqueMorseRepresentations = (words) => {
  const morseCodes = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
  const mapToCode = char => morseCodes[char.charCodeAt(0) - 'a'.charCodeAt(0)];
  return new Set(words.map(word => word.split('').map(mapToCode).join(''))).size;
}

/*
 * Single line arrow functions for maps make it easier to read.
 * Prefer no magic numbers.
 * using Set to find unique values.
 * Array.prototype.includes();
 */
