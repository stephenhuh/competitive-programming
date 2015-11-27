#include <iostream>
#include <string>
#include <cstring>
#include <algorithm>
//implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

bool uniquestring(std::string str){
	//there are 128 unique characters. immediately return false
	int len = str.length();
	if (len > 128) return false;

	bool char_set[256];
	memset(char_set, '\0', 256);

	for (int i = 0; i < len; i++){
		int val = str - '0';

		if (char_set[val]) return false;
		
		char_set[val]	= true;
	}
	
	return true;
}


bool uniquestring2(string str){
	int checker = 0;
	for (int i = 0; i < str.length(); i++){
		int val = str[i] - 'a';
		if ((checker & (1 <<val)) > 0){
			return false;
		}
	
	}
}

//reverse a string in place
void reverse(char *str){
	char* end = str;
	char tmp;
	if (str) {
		while (*end) ++end;
		--end;

		while (str < end){
			tmp = *str;
			*str++ = *end;
			*end-- = tmp;
		}
	}
}
//given two strings write a method to decide if one is a permutation of the other
bool permutation(string a, string b){
	//sort the strings.
	sort(a.begin(), a.end());
	sort(b.begin(), b.end());

	//set them equal to see if they're indeed equal
	if (a == b) return true;
	return false;
}


bool permutation2(string a, string b){
	if (a.length() != b.length()) return false;
	int letters[256];

	for (int i = 0; i < a.length(); i++){
		int x = a[i];
		letters[x]++;
	}

	for (int i = 0; i < b.length(); i++){
		int c = b[i];
		if (--letters[c] < 0) return false;
	}
	
	return true;


}
//implement a method to perform basic string compression "aabcccccaaa" becomes "a2b1c5a3"
string compressBad (string str){
	string mystr="";
	char last = str[0];
	int count = 1;
	for (int i = 1; i < str.length();i++){
		if (str[i] == last){
			count++;	
			} else {
				mystr += last + "" + count;
				last = string[i];
				count = 1;
			}
	}
	return mystr + last + count;

}


