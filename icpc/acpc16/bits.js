let line;
let input =[];

while (line = readline()){
	input.push(line);
}

let count = input.shift(); //pop count mutate input array
//["12", "34", "56"] -> [["1", "2"]]
input = input.map((el) => {
	return el.split('');	
});

for (let i = 0; i < input.length; i++){
	print(getMaxCount(input[i]));
}


//string -> num
function countOnes(numberAsString){
	let count =  (parseInt(numberAsString).toString(2).match(/1/g) || []).length;
	return count;
}



//["1","2"] => num
function getMaxCount(arr){
	let max = 0;
	let count = 0;
	let num;
	for (let i = 0; i < arr.length; i++) {
		num = "";
		for (let j = 0; j <= i; j++){
			num += arr[j];
		}
		count = countOnes(num);
		if (count > max) max = count;
	}
	return max;
}
