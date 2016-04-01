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

bool pairCompare(pair<int, int> &a, pair<int, int> &b){
	if (a.first > b.first){
		return true;	
	} else if (a.first == b.first){
		if (a.second < b.second) return true;
		else return false;
	}
	return false;	
}
int main()
{
	int n, k;
	cin >> n >> k;
	vector<pair<int,int> > scores;
	int count = 0;
	while (n--){
		int p = 0, t = 0;
		pair <int, int> score;
		cin >> p >> t;
		score = make_pair(p, t);
		scores.push_back(score);
	}
	sort(scores.begin(), scores.end(), pairCompare);
	binary_search(scores);

	return 0;
}

