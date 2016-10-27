/**

 * @param {string} s

 * @return {number}

 */

var titleToNumber = function(s) {

    if (s.length === 1) {

        return s.charCodeAt(0) - 65 + 1;

    } else {

        //Z -> 26

        //AB -> 26

        //AA -> (26^1) * 1 + (26^0)*1

        //BC -> (26^1) * 1 + (26^0)*3

        s = s.split('');

        return s.reduce((prev, curr, idx, arr) => {

            return  Math.pow(26, (arr.length - idx-1)) * (curr.charCodeAt(0) - 65 + 1) + prev;

        }, 0)

        

    }

};
