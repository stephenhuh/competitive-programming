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

//return number of trailing zeroes of a given int
int trailingzeroes (int zero){
	int sum = 0;
	int power = 1; //5^1 = 5
	int summedtotal = 5;//start at 5
	while (zero >= summedtotal){
		summedtotal = pow(5, power);
		sum += zero / summedtotal;
		power++;
	}
	return sum;
}

void print(vector<int> res){
	for (vector<int>::iterator i = res.begin(); i != res.end(); ++i){
		cout << *i << ' ';
	}
	return;
}

int main(){
	int num = 0;
	vector<int> res;
	int x = 5; 
	cin >> num;
	if (num == 5) {cout << "0"; return 0;} //bugs on compiler...?
	while (trailingzeroes(x) <= num){
		if (trailingzeroes(x) == num){
			res.push_back(x);
		} 
		
		x++;
	}
	cout << res.size();
	if (res.size() > 0) {
		cout << endl;
	 print(res);
	}
	return 0;
}

