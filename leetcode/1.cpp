#include<iostream>
#include <map>
int main (){
	std::map<std::string, int> grades;
	grades["Jones"] = 78;
	grades["Smith"] = 83;
	std::cout << grades[1];
	return 0;
}


