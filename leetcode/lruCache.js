/**
 * @param {number} capacity
 * Basically abuse map's inserted order mechanism
 */
var LRUCache = function(capacity) {
    this.cache = new Map();
    this.capacity = capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    const NOT_FOUND = -1;
    if (!this.cache.has(key)) return NOT_FOUND;
    const val = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, val);
    return val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    //evict
    if (!this.cache.has(key) && this.cache.size == this.capacity) {
        //console.log('evicting?')
        //console.log('keytodel', this.cache.keys().next().value);
        //get oldest key and evict
        this.cache.delete(this.cache.keys().next().value);
    }
    
    //insert while refreshing order if already has
    if (this.cache.has(key)) {
        this.cache.delete(key);
    }
    this.cache.set(key, value);
};
