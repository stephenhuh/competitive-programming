//template version
template <typeName T>
T square (T x){
	return x*x;
}

//non-template version
double square (double x){
	return x*x;
}

int main (){ //code bloat
	//explicit type
	std::cout << square<int>(5) << std::endl;
	std::cout << square<double>(5) << std::endl;

	//implicit type
	std::cout << square(5) <<std::endl;
	std::cout << square(5.5) << std::endl;

}

//template class -- no implicit typing here

template<typeName T>
class BoVector {
	T arr[1000];
	int size;
	public:
	BoVector():size(0){} //initialize size to 0?
	void push(T x) { 
		arr[size] = x;
		size++;
	}
	void print() const {for (int i = 0; i < size; i++){
		cout << arr[i] << endl;
	

		}
	}
}
