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
//vector of pairs
//write custom comparator function
//sort
//binary search in
//find if anything is below and if not is anything above.

int main(){
	//Need to have more than half of the value of sum
	//to minimize the number of coins, go for largest coins until sum to more than  half of the whole 
	int x;
	cin >> x;
	vector<double> coins;
	double sum = 0;

	while (x--){
		int b;
		cin >> b;
		coins.push_back(b);
		sum += b;
	}
	//sort descending
	sort(coins.begin(), coins.end(), greater<int>()); 
	double half = sum / 2;
	sum = 0;
	int count = 0;
	for (int i = 0; !(sum > half); i++){
		sum += coins[i];
		count++;
	}
	cout << count;
	return 0;
}

