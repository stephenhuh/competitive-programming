//find substring, if occurs else return 0
//iterate through substring replacing hash and recursively go through



int recurse (int index, int ret){
	int val = 0;
	if (str.find(substr) == string::npos){
		val++;	
		recurse(index+1, 1)
	}
	return 0;
}
