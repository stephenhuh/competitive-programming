
/*
 * want an even number between two people
 * numbers dont need to be equal
 * every even number above 2 seems to be okay
 * example: 4 -> 2,2, 6-> 2,4
 * 
 *
 */

#include <iostream>
using namespace std;

/*
int main(){
	int num;
	cin >> num;
	if (num & 1 && num <=2 ) cout << "NO\n"; //odd?
	else cout << "YES\n";
	return 0;
}
*/

int main() {  
    int w;
    cin >> w;
    cout << ((w % 2 == 0 && w != 2) ? "YES\n" : "NO\n");
    return 0;
}
