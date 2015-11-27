#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;

//a,b,c,d,e,f
//1,2,3,4,5,6
//7,8,9,1,1,2
//7,8,9,1,1,2
//1,2,3,4,5,6

//[1][2]


//2d arrays are rows first
int main(){
	//create array 6*6	
	int array[6][6];
	//initialize values into the array
	for (int i = 0; i < 6; i++){
		for (int j = 0; j < 6; j++){
			cin >> array[i][j];
		}
	}
	//sum up hourglasses
	int sum = 0;
	int large = 0;
	//compare all hourglasses - iteratively
	//16 possible hourglasses
	for (int i = 0; i < 4; i++){
		for(int j = 0; j < 4; j++) {
			//add top
			//add bottom
			for (int k = 0; k < 3; k++){
				sum += array[i][k+j];
				sum += array[i+2][k+j];
			}
			//add middle
			sum += array[i+1][j+1];
			//finished adding
			//compare
			if (sum > large)
				large = sum;
		}
	}
	//print largest sum
	cout << large;
	return 0;
}
