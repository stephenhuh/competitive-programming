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
#define ITR(vec) for(auto it=vec.begin(); it!=vec.end(); it++)
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
	//algorithm:
	//create list or vector of integers used.
	//cool trick: to do it upon insertion
	//add number of ints given until one has already been used. decrement until it hits 0
	long long int num = 0;
	cin >> num;
	long long int temp = 0;
	vector<long long int> v;
	while (num--){
		cin >> temp;
		while((std::find(v.begin(), v.end(), temp)) != v.end()){
			temp--;
		}
		if (temp >= 0) v.push_back(temp);
	}
	long long int sum = 0;
	for (auto it = v.begin(); it != v.end(); it++){
		sum += *it;
	}
	cout << sum;
}

