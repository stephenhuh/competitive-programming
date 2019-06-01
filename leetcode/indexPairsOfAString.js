var indexPairs = function(text, words) {
    const res = [];
    words.forEach((word) => {
        let begIdx = text.indexOf(word, 0);
        while (begIdx !== -1) {
            res.push([begIdx, begIdx + word.length - 1]);
            begIdx = text.indexOf(word, begIdx+1);
        }
    })
    return res.sort(([a1,b1], [a2,b2]) => {
        if (a1 - a2 === 0) return (b1 - b2);
        return a1 - a2;
    });
};
