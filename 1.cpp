#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main(){
	//T is # of inputs
	int T = 0;
	//read from STDIN
	cin >> T;
	int tempT = T;

	int counter = 0;
	int inputs[T];
	//T array holds N values
	while (T){
		T--;
		cin >> inputs[counter];
		counter++;
	}
	//set counter back to 0	
	counter = 0;
	T = tempT;

	//initialize vars
	
	while (counter < T){
		int N = inputs[counter];
		int high = N/2+1;
		int	low = N/2;
		int k = 0;

		//if even
		if (N%2==0) {
			while (high <= N){
				cout << low << " ";
				cout << high << " ";
				high++;
				low--;
				}
			cout << "\n";
		} else {
			while (high <= N){
				cout << high << " ";
				if (low == 0) break;
				cout << low << " ";
				high++;
				low--;
			}
			cout << "\n";
		}
		counter++;
	}
	return 0;
}
