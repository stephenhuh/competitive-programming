const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	//output: process.stdout,
	terminal: false
});

rl
  .on('line', function(line){
      console.log(main(line));
  })
  .on('close', () => {
      
  })
    
const main = (n) => {
    const denominations = [100,20,10,5,1];
    let count = 0;
    denominations.forEach((denom) => {
        while (n >= denom) {
            n -= denom;
            count++;
        }
    })
    return count;
}
