/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function(points) {
    const edges = [];
    
    // calculate all possible edges
    for (let i = 0; i < points.length - 1; i++) {
        for (let j = i + 1; j < points.length; j++) {
            const [a,b] = [points[i], points[j]];
            const edge = [i, j, getDistance(a, b)]
            edges.push(edge);
        }
    }
    
    // initialize UF
    const uf = [];
    for (let i = 0; i < points.length; i++) {
        uf.push(i);
    }
    
    //sort all edges by weight
    edges.sort(([a,b,weightA], [c,d,weightB]) => weightA - weightB);
    
    //union each edge until edges is 1 less than number of vertices
    let resWeight = 0;
    let ct = 0;
    let i = 0;
    
    //console.log('edges', edges)
    while (ct < points.length - 1) {
        //console.log(uf);
        const [u,v,weight] = edges[i];
        if (find(u, uf) != find(v, uf)) {
            console.log('unioning..', u, v);
            union(u, v, uf)
            resWeight += weight;
            ct++;
        }
        i++;
    }
    //console.log('final ct', ct)
    //console.log('final UF', uf)
    return resWeight;
};

const find = (idx, uf) => {
    if (uf[idx] === idx) return idx;
    return find(uf[idx], uf);
}

const union = (u, v, uf) => {
    const rootU = find(u, uf);
    const rootV = find(v, uf)
    uf[rootU] = uf[rootV];
}

const getDistance = (a, b) => {
    //console.log(a,b);
    const [xi, yi] = a;
    const [xj, yj] = b;
    return Math.abs(xi - xj) + Math.abs(yi - yj);
}
