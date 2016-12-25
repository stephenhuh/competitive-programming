function stonesOnTheTable (count, colors) {
    let diff = 0;
    let prev;
    for (var i = 0; i < colors.length; i++){
       if (i === 0) {
           prev = colors[0];
           continue;
       } else {
           if (colors[i] == prev) {
                diff++;
           } else {
               prev = colors[i];
           }
       }
    }
    if (checkSameChar (colors)) diff --;
    return diff;
}

function checkSameChar (str){
    let first;
    first = str[0];
    return str.split('').every((el, idx, arr) => {
        return el === first;
    });
}


console.assert(stonesOnTheTable(3, "RRG") === 1, {error: "sample"});
console.assert(stonesOnTheTable(5, "RRRRRR") === 4, {error: "sample2"});
console.assert(stonesOnTheTable(4, "BRBG") === 0, {error: "sample3"});

console.log(stonesOnTheTable(3,"RRG"));
console.log(stonesOnTheTable(5, "RRRRRR"));
console.log(stonesOnTheTable(4, "BRBG"));
