#include <stdio.h>

//write a function taht outputs the nth fibonnaci number. A number in this sequence is found by adding up the two numbers
//1,2,3,5,8,13,21
//1 2 3 4 5


int fib(int x){
	if (x==0){
		return 0;	
	}
	if (x==1){
		return 1;	
	}
	return fib(x-1)+fib(x-2);
}
