/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
/*
var minWindow = function(s, t) {
    //Add counts of pattern to the map
    const map = new Map();
    t.split('').forEach((char) => {
        if (map.get(char) !== undefined) {
            map.set(char, ++map.get(char));
        } else {
            map.set(char, 1)
        }
    })
    
    //initalize variables
    let lhs = 0,
        rhs = -1,
        lhsMatch = undefined,
        
        res = '',
        minLen = Number.MAX_VALUE,
        currLen = -1,
        lpRes = -1,
        rpRes = -1;
    
    //iterate rhs from 1 to end of string
    while (rhs < s.length) {
        console.log(map);
        console.log(`lhs ${lhs}, rhs ${rhs}, lhsMatch ${lhsMatch}, res ${res}, minLen ${minLen}, lpRes ${lpRes}, rpRes ${rpRes}, srhs ${s[rhs]}, slhs ${s[lhs]}`);
        //if any of map are gt 0, keep going.
        let vals = [...map.values()];
        if (vals.some((el) => el > 0)) {
            //if we find a matching character, decrement in map
            if (map.get(s[rhs]) !== undefined) {
                map.set(s[rhs], map.get(s[rhs]) -1);
            }
            rhs++; 
        }
        //else implies all are lte 0, we can shorten the substr
        else {
            //Save current window
            lhsMatch = s[lhs];
            lpRes = lhs;
            rpRes = rhs;
            minLen = rpRes - lpRes;
            currLen = rhs - lhs;
            
            //iterate until we find what we can spare.
            rhs++;
            if (map.get(s[rhs]) !== undefined) {
                map.set(s[rhs], --map.get(s[rhs]) );
            } else if (map.get(lhsMatch) < 0) {
                //if the lhsmatch char is lt 0 in the map, we can shorten lhs
                //one of our excess counts is available to shorten
                map.set(lhsMatch, ++map.get(lhsMatch))
                lhs++;    
            }
        }
    }
    return res;
};
*/
