#include <stdio.h>
#include <iostream>
//num of distinct character == odd then male
int main(){
	int arr[26] = {0};
	//97 - 122
	int c;
	int i = 0;
	c = getchar();
	while ( c != EOF ){
		i = c - 'a';
		arr[i]++;
		c = getchar();
	}
	return 0;

}


