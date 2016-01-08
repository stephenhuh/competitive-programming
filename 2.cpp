#include <iostream>
std::string LuckyTicket(int n, std::string s) {
    int len = s.length();
    int a = 0;
    int b = 0; 
    for (int i = 0, j = len-1; j != i; i++, j--) {
        //not equal to 4 or 7
        a += s[i] + '0';
        b += s[j] + '0';
		std::cout << a;
		std::cout << b;
	if (s[i] !='4' && s[i] !='7' && s[j] != '4' && s[j] != '7')	
           return "NO";
    }
	std::cout << a;
	std::cout << b;
    if (a == b) return "YES"; else return "NO";
}

int main(){
	LuckyTicket(4, "4774");
}
