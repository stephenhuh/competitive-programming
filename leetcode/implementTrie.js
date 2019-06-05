const A_ASCII_CODE = 97;
//helper to get first char ascii
const encode = (charOrWord) => charOrWord.charCodeAt(0) - A_ASCII_CODE;

var Trie = function() {
    this.end = false;
    this.children = new Array(26).fill(false);
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    if (word.length === 0) {
        this.end = true;
        return;
    }
    const code = encode(word);
    if (!this.children[code]){
        const node = new Trie();
        this.children[code] = node;
    }
    this.children[code].insert(word.substring(1));
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    /** have we exhausted the string? if so, is it valid? **/
    //valid
    if (word.length === 0 && this.end) return true;
    //invalid
    if (word.length === 0 && !this.end) return false; 
    const code = encode(word);
    /** keep searching, short circuit in case this is as big as this subtree goes i.e. string is longer than stored dictionary of words**/
    return this.children[code] && this.children[code].search(word.substring(1));
};

/** only looking to see if any word starts with prefix, so if we can traverse, then there's an inserted word! **/
Trie.prototype.startsWith = function(prefix) {
    if (prefix.length === 0) return true;
    const code = encode(prefix);
    if (!this.children[code]) return false;
    return this.children[code].startsWith(prefix.substring(1));
};
