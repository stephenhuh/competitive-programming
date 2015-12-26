//questions: is ({[]}) valid?
//given a string containing just the characters parens, brackets, etc, determine if input string is valid
//the brackets must close in the correct order. 
//given: string. if nested is fine, the character that is on the opposite side should be the other pair element. there must exist the other element
//testcases ([]) -> 1,4 match, 2,3 match
//([{}]) -> 1,6, 2,5, 3,4
//(){ -> fail, wrong position. ({) no matching 
//approach: always look for opposite pair, if found && in oposite spot then continue, else return false
using namespace std;

class Solution {
	public:
		bool isValid(string s){
			std::vector<std::pair<char, char>> p{{'(',')'}, {'[', ']'}, {'{', '}'}};
			for (int i = 0; i < s.size();, i++){
				if p[]
			
			
			}
		}
}
