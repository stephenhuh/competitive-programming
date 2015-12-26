//given a non-negative number represented as an array of digits, plus one to the number.
//array -- ready access to each element since ordered
//significant digit is at thead of list
//
//question: how is the list represented?
//vector<int>& digits
//test cases:
//general: 
//14 -> 15
//19 -> 20
//99 -> 100
//approach: start off by adding one to the least significant digit, if that sums to 10, go to next
class Solution{
	public:
		vector<int> plusOne(vector<int>& digits){
			n = digits.size();
			for (int i = n-1; i >= 0; i--){
				if (digits[i] + 1 == 10){
					digits[i-1]++;
				}
			}
		}
};
