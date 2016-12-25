var line;
var primary = 0;
var secondary = 0;
var obj = {};
var input = [];
var correct = [];

// [3 E right]
// {question: attempts}
while (line = readline()) {
	if (line == -1) {
		continue;
	};
	//taking it per line - breaking it into an array
	var submission = line.split(' ');
	//store as array of arrays
	input.push(submission);
	//count correct answers
	if (submission[2] === 'right'){
		primary++;
		correct.push(submission[1]);
		secondary += Number(submission[0]); // add time
	}
}


input.forEach(function(el, idx, arr){
	//if q has been registered correctly add 20 to the score
	if (correct.indexOf(el[1]) !== -1 && el[2] !== 'right'){
		secondary += 20;
	}
});

print(primary, secondary);

