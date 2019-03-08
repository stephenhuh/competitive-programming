#include <iostream>
using namespace std;

int main (){
	int n, m, a;
	cin >> n >> m >> a;
	long long rowFlags, colFlags;
	rowFlags = n / a + (n % a == 0 ? 0 : 1) ;
	colFlags = m / a + (m % a == 0 ? 0 : 1) ;
	cout << rowFlags * colFlags << "\n";
	return 0;
}
