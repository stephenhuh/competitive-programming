//given two 1d vectors, implement an iterator to return their elements alternately
//implement iterator to alternate between 2 1d vectors
//given: 
//vectors, ready access to each element
//O(1) insert
//O(n) removal
//test cases:
//general case: [1,2,3], [4,5,6,7]
//edge: [], [1,3]
//edge: [],[]
//
//approaches: can i just merge the two vectors into a new one and have an iterator that pulls from size of v1+i?
//what if i keep a global variable flag to know which vector is next and which element its on
ZigzagIterator(vector<int>& v1, vector<int>&v2){
	cols.push_back(0); cols.push_back(0);
	this->v1 = v1;
	this->v2 = v2;
	cur = -1;
}
int next(){
	cur = (cur+1) % 2;
	if (cur == 0 && cols[0] < v1.size())
		return v1[cols[0]++];
	else if (cur == 1 && cols[1] < v2.size())
		return v2[cols[1]++];

	return next();
}

bool hasNext(){
	return cols[0] < v1.size() || cols[1] < v2.size();
}



