//game - two players
//can select 1-3 stones
//last stone is winner
//function to determine winner based on # of stones
//steve and joe
//4 stones, steve goes first, joe can win. steve can't win -- 4-1 = 3, 4-3. 
//5 stones, steve goes first can win. 5-1 
//6 stones, steve goes first can win 3 stones, joe takes 1
//established truths:
//if by any combination joe leaves 1-3 stones at the end for steve, steve wins.
//brute force solution: to try each combination of 1-3 stone combinations
//truth about the number of combinations: every combination 
//truth: the max number of stones taken before its steves turn again is 6
//truth: any number between 1-6 can be reached with enough turns by some combination of subtracing 1-3

//wrong
class Solution {
public:
	bool canWinNim(int n){
		//find number of trials possible at minimum which would be n%3
		//find maximum number of trials n%1
		//have a counter that checks whether even or odd, odd is steve
		n %= 7;
		switch (n){
		case 1 :
			return true; //take all
		case 2 :
			return true;
		case 3 :
			return true;
		case 4 :
			return false;
		case 5 :
			return true;
		case 6 :
			return true;
		case 7 :
			return true;
		}

		return false;	
	}
};

class Solution {
public:
	bool canWinNim(int n){
		return n%4;
	}
};

class Solution {
	public:
		bool canWinNim(int n){
			return n&3;
		}
}
