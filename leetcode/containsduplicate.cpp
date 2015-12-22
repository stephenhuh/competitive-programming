//given array
//O(1) access to all elements
//.swap method 
//hashtable.
//pros: fast 
//cons: difficult to understand
//array 
//pro: simple
//con: space wise sucks
//binary tree
//con: complicated
class Solution {
	public: 
		bool containsDuplicate(vector <int>& nums){
			//insert all elements into hashtable.
			//return true if any appear to have multiple elements
			//counting the list of the table or upon insertion
			unordered_map<int key, int mapped> htb{
				int n = nums.size();
				int i;
				if (n < 2)
					return false;
				mymap.insert({nums[0], 0});
				for (i = 1; i < n; i++){
					got = mymap.find(nums[i]);
					if (got!=mymap.end())
						return true;
					mymap.insert({nums[i], i})
				}
				return false;
			}
		}}
		//bool containsDuplicateArray{
		//1. huge array where index corresponds to element key
		//2. upon insertion read through whole array to see if element already exists, and if so return correspondingly
		//
		//
		//}
}


//Given an array of integers, find if the array contains any duplicates. Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
//given array
//return true if any value appears twice
//testcases: [1,2,3,4,5,2] true
//e.g. []: false
//e.g. null : false
//e.g. [2,1,3] : false
//approach:
//htbl of counts for each integer.
//upon insertion return if anything hits two
//do we need the htbl?
//
//
//
