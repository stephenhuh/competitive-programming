function reverseIteratively (str){
	let ret = "";
	for (let i = str.length - 1; i >= 0; i--){
		ret += str[i];		
	}
	return ret;
}

function reverseRecursive (str){
	return str ? reverseRecursive(str.substring(1)) + str.charAt(0) : "";
}


function reverseTailRecursive(str, acc = ""){
	return str ? reverseTailRecursive(str.substring(1), str.charAt(0) + acc) : acc;
}

function reverseNormal(str){
	return str.split('').reverse().join('');
}

function reverseReduce(str){
	return str.split('').reduce((prev, curr, i, arr) =>{
		return prev + arr[arr.length-1-i];
	}, "");
}

function reverseMap(str){
	return str.split('').map((el,idx,arr) => {
		return arr[arr.length-1-idx];
	}).join('');
}

function reverseComplexMap(str){
		
}
