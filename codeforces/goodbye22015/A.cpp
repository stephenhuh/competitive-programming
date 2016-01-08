#include <iostream>
#include <vector>
#include <string>
using namespace std;


int main(){
	//x of week, x of month
	string goal = "";
	getline(cin,goal);
	vector<int> cal {31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
	int res = 0;
	if (goal.find("month") != std::string::npos){
		int x = goal[0] - '0';
		int y = goal[1] - '0';
		int day = x*10 + y;
		for (vector<int>::iterator it = cal.begin(); it!= cal.end(); ++it){
			if (day > *it) continue;
			else res++;
		}
	}
	if (goal.find("week") != std::string::npos){
		int x = goal[0] - '0';
		if (x == 1 ||  x == 2 || x == 3 || x == 4|| x == 7) res = 52;
		if (x == 6 || x == 7) res = 53;
	}
	cout << res << '\n';
	return 0;
}

