//0,1,2,4,5,7
// give CONSECUTIVE ranges
//given:
// vector, ready access to each element
// vector can be resized
// testcases: 0,2,5,6,7,100 ["0", "2", "5->7", "100"]
// edge:[1,2,3,4]
// [] empty vector, return empty vector back
// null, throw err
// approach:
	//push string first char
	//if first char ++ == 2nd char
	//move to next char
	//until not == to next char
	//push that string onto vector
	//continue until end of vector is hit
class Solution {
public:
	vector<string> summaryRanges(vector<int>& nums){
		vector<string> ret;
		if (nums.empty()) return ret;
		if (!nums) //throw err;
		std::string range = "";
		int n = nums.length();
		bool flag = true;
		for (int i = 0; i < n; i++){
			 if (flag) strcat(range, nums[i] + '0'); //add first character
			 if (++nums[i] == nums[i+1]) {
				 i++;
				 flag = false;
			 } else {
				 range = range + "->" + (nums[i] +'0');
				 ret.push_back(range);
				 range.clear();
			 }
		}
		return ret;
	}
}
