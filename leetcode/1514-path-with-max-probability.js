/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start
 * @param {number} end
 * @return {number}
 */


class Heap {
    constructor(array = []) {
        this.store = [...array];
        Math.floor(array.length - 1 / 2)
        for (let i = )
    }
    
    add(el) {
        this.store.push(el);
        this.store.sort(([aNull, aProb], [bNull, bProb]) => bProb - aProb);
    }
    
    size() {
        return this.store.length;
    }
    
    poll() {
        return this.store.shift();
    }
    
}

var maxProbability = function(n, edges, succProb, start, end) {
    if (n === 0) return 0;
    
    const probabilities = new Array(n).fill(-Infinity);
    const neighbors = new Map();
    const visited = new Set();
    //const parents = new Array(n).fill(null);
    const heap = new Heap();
    
    for (let i = 0; i < n; i++) {
        neighbors.set(i, []);
    }
    
    
    for (let i = 0; i < edges.length; i++) {
        const [a, b] = edges[i];
        neighbors.get(a).push([b, succProb[i]]);
        neighbors.get(b).push([a, succProb[i]]);
    }
    
    heap.add([start, 1]);
    //console.log('neighbors', neighbors);
    while (heap.size() > 0) {
        const curr = heap.poll();
        //console.log('curr', curr);
        const [src, probability] = curr;
        visited.add(src);
        
        for (const edge of neighbors.get(src)) {
            //console.log('edge', edge, 'from', src);
            const [dest, destProbability] = edge;
           // if (visited.has(dest)) {
                //console.log('skipping edge to', dest, 'from', src)
             //   continue;
            //}
            const multiplicand = probabilities[src] === -Infinity ? 1 : probabilities[src]; 
            const newProbability = multiplicand * destProbability;
            //console.log('newProbability', newProbability)
            //console.log('probabilities', probabilities)
            if (newProbability > probabilities[dest]) {
                heap.add([dest, newProbability])
                probabilities[dest] = newProbability;
                //parents[dest] = curr;
            }
        }
    }
    
    if (probabilities[end] === -Infinity) return 0;
    
    return probabilities[end];
};
