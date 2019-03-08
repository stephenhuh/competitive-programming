#include <iostream>
#include <sstream>
#include <cstdio>
#include <cmath>
#include <cstring>
#include <cctype>
#include <string>
#include <vector>
#include <list>
#include <set>
#include <map>
#include <queue>
#include <stack>
#include <algorithm>
#include <functional>
using namespace std; 
#define DEBUG(x) cout << '>' << #x << ':' << x << endl;
#define REP(i,n) for(int i=0;i<(n);i++)
#define FOR(i,a,b) for(int i=(a);i<=(b);i++)
#define FORD(i,a,b) for(int i=(a);i>=(b);i--)
#define ITR(vector) for(auto it=vector.begin(); it!=vector.end(); it++)
inline bool EQ(double a, double b) { return fabs(a-b) < 1e-9; }
const int INF = 1<<29;
typedef long long ll;
inline int two(int n) { return 1 << n; }
inline int test(int n, int b) { return (n>>b)&1; }
inline void set_bit(int & n, int b) { n |= two(b); }
inline void unset_bit(int & n, int b) { n &= ~two(b); }
inline int last_bit(int n) { return n & (-n); }
inline int ones(int n) { int res = 0; while(n && ++res) n-=n&(-n); return res; }
template<class T> void chmax(T & a, const T & b) { a = max(a, b); }
template<class T> void chmin(T & a, const T & b) { a = min(a, b); }
void PRINT(string s){
	cout << s << endl;
}
/////////////////////////////////////////////////////////////////////
//
//
//
//reflection: should've noted that lower then consec upper is same as all upper if you do isupper from index 1.
int main()
{
	string input;	
	cin >> input;
	REP(i, input.length()){
		//first lowercase, rest uppercase
		if (input.length() == 1 && islower(input[0])){
			putchar(toupper(input[0]));
			return 0;
		}
		if (islower(input[0]) && isupper(input[1])){
			for (i = 2; i<input.length(); i++){
				if (!isupper(input[i])){
					cout << input;
					return 0;
				}
			}
			//confirmed only first is lowercase
			for (i = 0; i < input.length(); i++){
				if (isupper(input[i])) putchar(tolower(input[i]));
				if (islower(input[i])) putchar(toupper(input[i]));
			}
			return 0;
		} 
		//only uppercase
		if (isupper(input[i])) {
			if (i == (input.length() - 1)) {
				REP(i, input.length()){
					putchar(tolower(input[i]));
				}
				return 0;
			}
			continue;
		} else break;
	}
	cout << input;
    return 0;
}
