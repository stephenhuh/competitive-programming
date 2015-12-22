#include <math.h>
#include <iostream>
//add all digits of a number
//digits can be found... by modulo by that tenth power
int addDigits (int num){
	if (num < 10){
		return num;
	}
	int power = 1;
	int sum = 0;
	int div = 10;
	//find what maximum power it is
	while (num / div){
		int result = num/div;
		div = pow(10, power);
		std::cout << result;
		power++;
	}

	//get each digit then recurse
	for (int i = 1; i < power; i ++){
		int divisor = pow (10, i);
		sum += num % divisor;
	}
	return addDigits(sum);
}


int main (){
	std::cout <<addDigits(11);
	return 0;
}

int addDigitscorrect(int num){
    if(num<10){
        return num;
    }
    else{
        return 1+((num-1)%9);
    }

}
