//Given an array of integers, find two numbers such that they add up to a specific target number.
//a + b = target, target - b = a;
//index 1 
vector <int> twoSum(vector<int>& nums, int target){
	unordered_map<int, int>hash;
	vector<int> result;
	
	for (int i = 0; i < numbers.size(); i++){
		int numberToFind = target - numbers[i];

		if (hash.find(numberToFind) != hash.end()){ //find returns hash.end if nothing found
			result.push_back(hash[numberToFind] + 1); //represents 
			result.push_back(i+1);
			return result;
		}
		
		hash[numbers[i]] = i;
	
	
	}


}
