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
int main()
{
	//Algo
	//find middle where luke has no width by comparing speeds to length
	//spread lukes distance across by speed of same presses
	//find leftmost pos of luke and compute time it takes
	double d = 0, L = 0, v1 = 0, v2 = 0;
	double d1 = 0, d2 = 0;
	double lukedistance = 0;
	double leftdistance = 0;
	cin >> d >> L >> v1 >> v2;
	//length covered per second 
	double x = L / (v1 + v2);
	//total distance covered per press where luke is 0
	d1 = x * v1, d2 = x * v2;
	//distribute luke
	lukedistance =  d / (v1 + v2);
	leftdistance = d1 - (lukedistance * v1);
	cout << setprecision(9) << leftdistance / v1;
    return 0;
}
