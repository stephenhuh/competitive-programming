#include <ctime>
#include <iostream>
using namespace std;

void printkchars(char a, int k) {
  for (int i = 0; i < k; i++) {
    cout << a;
  }
}

//learn to draw a spiral could just draw onto a textpad



int fibonacci(int n){
	//cout << n << endl;
	if (n < 2) return n;
	return fibonacci(n-1) + fibonacci(n-2);
}

int fibonacciTwo (int n){
	

}


int main(){
	int n;
	int res;
	cin >> n;
    cout << "#include <iostream>" << endl;
	cout << "using namespace std;" << endl;
	cout << "int main() {";
	cout << "int n;";
	cout << "cin >> n;";
	cout << endl;
	cout <<" switch (n) {";
	for (int i = 0; i < n; i++){
		clock_t begin = clock();
		res = fibonacci(i);
		clock_t end = clock();
		double elapsed_secs = double(end - begin) / CLOCKS_PER_SEC;
		//cout << i << " " << res << " "<< elapsed_secs << endl;
	    cout << "case " << i << ": cout << " << res << "; break;";
	}
	cout << "} }";

	return 0;
}





/*
int main(){
	int t = 0;
	int l, h;
	cin >> l >> h;
	for (int i = 0; i < h; i++){
		switch (i % 4) {
		  //check for even
		  case 0:
		  case 2:
		  printkchars('*', l);
		  break;

		  case 3:
		  printkchars(' ', l-1);
		  
		  printkchars('*', 1);
		  break;
		  case 1:
		  printkchars('*', 1);
		  printkchars(' ', l-1);
          break;
		}
		cout << endl;
	}
}

*/
