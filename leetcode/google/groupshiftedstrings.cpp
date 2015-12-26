//questions:
//is the string ascii? what language? only english characters? lowercase?
//what happens at the end of the alphabet? is it cyclical?
//given a string, find strings that are of same shifting sequence
//return a vector of a vector of strings.
//string letters can be subtracted to numbers
//
//test cases:
//null - return empty string or void or  throw error
//void seems appropriate here
//["abc", "bcd"]
//["za"]["ab"]
//["a"]["b"]
//
//
//
//approaches:
//ascii char subtraction, except for accounting for z and a
//a functional approach - map each value to its values
//if its only english - can use 1-13 and back

class Solution {
	public:
		vector<vector<string>> groupStrings(vector<string>& strings){ // a vector of strings, a vector of vector of strings
			unordered_map<string, vector<string>>;
			for(string s : strings)
				mp[shift(s)].push_back(s);
			vector<vector<string>> groups;
			for (auto m : mp){
				vector <string> group = m.second;
				sort(group.begin(), group.end());
				groups.push_back(group);
			}
			return groups;
		}
	private: 
		string shift(string& s){
			string t;
			int n = s.length();
			for (int i = 1; i < n; i++){
				int diff = s[i] - s[i - 1];
				if (diff < 0) diff += 26; // 
				t += 'a' + diff + ',';
		}
}

