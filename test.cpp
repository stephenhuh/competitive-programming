#include <iostream>
using namespace std;

int main(){
	int a, b;
	cin >> a >> b;
	for (int i = 0; i < a; i++){
		cout << "*";
	}
	cout << endl;
	for (int i = 0; i < b-2; i++){
		cout << "*";
		for (int i = 0; i < a-2; i++){
			cout << " ";
		}
		cout << "*" << endl;
	}

	if (b > 1){
		for (int i = 0; i < a; i++){
			cout << "*";
		}
	}
	return 0;
}
//read two numbers and pseudo graph of a square around it

/*
 *         ********
 *         *   8  *
 *         ********
 *
 *


5 3

*****
    *
*****

4 4


****
   *
****
*


10 5
**********
         *
**********
*
**********


3 8
***
  *
***
*
***
  *
***
*





5 5
*****
    *
*** *
*   *
*****
*/


