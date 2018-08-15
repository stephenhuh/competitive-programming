/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    const pos = {
        x: 0,
        y: 0
    }
    moves = moves.split('');
    moves.forEach((move) => {
        if (move === 'R') {
            pos.x++;
        } else if (move === 'L') {
            pos.x--;
        } else if (move === 'U') {
            pos.y++;
        } else {
            pos.y--;
        }
    })
    return pos.x === 0 && pos.y === 0 ? true : false;
    
};

/*
 * Note usage of [0,0] as the accumulator in the reduce call
 */
const judgeCircle = (moves) => {
    return moves.split('')
        .reduce((p, m) => [p[0] + (m === 'R') - (m === 'L'), p[1] + (m === 'U') - (m === 'D')], [0, 0])
        .join('') === '00'
};

