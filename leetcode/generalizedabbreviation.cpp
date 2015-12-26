//write a function to generate generalized abbrev of a word
//a generalized abbrev is when you can replace certain letters or a number of letters with a number that reps the number of letters missing
//
//2^n
//test cases: "go" -- "go", "1o", "g1", "2" -> 4
//"bye" -- "bye", "1ye", "b1e", "by1" "2e" "b2" "3"  -> 7
//"hello" -- "hello" "1ello" "h1llo""he1lo" "hel1o""hell1" "2llo "h2lo" "he"
//edge: "" empty string 
//edge: null
//
//approach: 
//push each combination into vector
//count of letters being replaced
//iterator for a string
//see a letter, replace it with one, until hit end
//see two letters, replace it with 2, until hit end
//O(N^2)
class Solution {
public:
	vector<string> generateAbbrevations(string word){
		vector<string> ret;
		ret.push(word);
		int limitCount = 1;
		for (std::string::iterator it=word.begin(); it!=word.end(); ++it){
			std::string abbrev = word;
			int count = 0;
			while (count != limitCount){
				abbrev[it] = count + '0'; 
				count++;
			}
			ret.push_back(abbrev); 
		}
		return ret;
	}
};
