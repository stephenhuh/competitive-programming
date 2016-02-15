#include <iostream>
#include <iomanip>
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
/////////////////////////////////////////////////////////////////////
/*
 *
 * Stevie Shortcuts
 *
 *
 *
 */
typedef long long ll;
typedef unsigned long long ull;
typedef long double ld;

const double EPS = 1e-9;
const double PI = acos(-1.0);
const int MOD = 1000 * 1000 * 1000 + 7;
/////////////////////////////////////////////////////////////////////
int main()
{
	ll balance = 0;
	cin >> balance;
	ll plastic = 0;
	ll glass = 0;
	ll rebate = 0;
	cin >> plastic >> glass >> rebate;
	ll gr = glass-rebate;
	ll ret = 0;
	//if balance is greater than glass and glass-rebate is cheaper than plastic, glass is the best option
	//if glass-rebate is not cheaper than plastic, go plastic
	//if glass is cheaper than plastic, think ahead.
	while (balance >= glass || balance >= plastic){
		cout << "going through";
		if (gr < plastic && balance >= glass) {
			cout << "bought glass";
			balance -= gr;
			cout << "my balance is" << balance << endl;
		} else if (gr >= plastic && balance >= plastic){
			cout << "bought plastic";
			balance -= plastic;
		} else if (gr < plastic) {
			cout << "bought glass";
			balance -= gr;
		} else {
			cout << "uncaught case";
		} //always better to have 
		ret++;
	}
	cout << ret;
    return 0;
}
