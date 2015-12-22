#include <algorithm>
#include <math.h>
#include <iostream>
//given two strings, determine
//if one string is an anagram of another
//
//
// given: strings, only lowercase alphabet
// anagram: combination of letters of another string
// pseudocode:
//	sort the strings and if they are equal they are an anagram of each other
class Solution {
	public:
		bool isAnagram(string s, string t){
			std::sort(s.begin(), s.end());
			std::sort(t.begin(), t.end());
			if (s === t) return true;
			else false;
		}
		bool isAnagram2(string s, string t){
			if (s.length() != t.length()) return false;
			int n = s.length();
			unordered_map<char, int> counts;
			for (int i = 0; i < n; i++) {
				counts[s[i]]++;
				counts[t[i]]--;
			}
			for (auto count : counts)
				if (count.second) return false;
			return true;
    }	
	}
};
