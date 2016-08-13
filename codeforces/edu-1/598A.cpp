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
void pause(){
	int x;
	cout << "Paused... Please enter a key to continue";
	cin >> x;
	return;
}
/////////////////////////////////////////////////////////////////////
//

bool is_power_of_2(int i) {
    if ( i <= 0 ) {
        return 0;
    }
    return ! (i & (i-1));
}

int main()
{
	//take all powers of two and minus in the sum
	//bit twiddling -- what are the cpp dt?
	//logarithms sum of 2^n properties
	int t = 0;
	int i = 1;
	cin >> t;
	unsigned long n = 0;
	long long int sum = 0;
	while (t--){
		cin >> n;
		sum = n*(n+1)/2;  //sum of all numbers
		int i=0;
		while((1<<i) <=n){    // 2^n
			sum=sum-2*(1<<i);
			i++;
		}
		cout << sum;
	}
	return 0;
}

