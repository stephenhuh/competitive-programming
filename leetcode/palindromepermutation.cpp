//Given a string, determine if a permutation of the string could form a palindrome.
//Questions:
//is the string only english letters? are they lowercase?
//assets:
//palindrome is a word that mirrors itself
//thus the letter in the middle is the only letter that isnt doubled in odd cases
//thus the count of every letter in the string must be exactly double, for even letter strings, but for odd letter strings one letter can be shared
//testcases:
//e.g. empty string return true.
//e.g. racecar e is shared, r-2,a-2,c-2,e-1 7 letters
//e.g. goog g-2,o-2
//e.g. xadax, x-2,a-2,d-1 odd letters
//e.g. toot - t-2 o-2, even letters
//e.g. xaaax
//Approaches:
//use array of 26, put into array count of each letter
//    take even vs odd
//    if even make sure every array element is either 0 or 2
//    if odd make sure every array element is either 0 or 2 except for one letter
//    con: space consumed
//    pro: can short-circuit if cut off on false cases where count is neither 0 or 2 except when odd.
//
//Pseudo:
//take 
//
class Solution {
	public:
		bool canPermutatePalindrome(string s){
			if (!s) return true;
			int len = s.size();
			bool flag = false;
			
			vector<int> [26] container;
			//memset
			std::fill(container.begin(), container.end(), 0);
			//fill up container
			for (int i = 0; i < len; i++){
				int num = l2n(s[i]);
				container[num]++;
			}
			//check palindrome
			//not accounting for strings like xxxxxx
			for (int i = 0; i < container.size(); i++){
				int count = 0;
				if (count != 0 || count != 2 && (len % 2 == 0)) return false;
				if (count != 0 || count != 2 && flag == true) return false;
				if (count != 0 || count != 2 && flag == false) flag = true;
				continue;
			}
			return true;

		}
		int l2n(char s){
			return s - 'a';
		}
		muchbetterSol(string s){
		   vector <int> freqs(256, 0);
			for (auto& c : s) ++freqs[c];
			auto oddCnt = count_if(freqs.begin(), freqs.end(), [](int d) { return d%2;}); //num of odd freqs
			return (s.size() % 2) == oddCnt; // must only have one odd count if odd. and none otherwise
		}
};
