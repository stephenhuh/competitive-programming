#include <iostream>
using namespace std;
void selectionSort (int A[], int n){
	/* a[0] to a[n-1] is the array to sort */
	int i,j;

	//[1,3,-2]				[-2,3,1]  [-2,1,3]
	//n = 3				   j= 1       j=2   
	//iMin = 1  iMin = -2  iMin = 1   
	//i = 1
	/* advance the position through the entire array */
	/*   (could do j < n-1 because single element is also min element) */
	for (j = 0; j < n-1; j++) {
		/* find the min element in the unsorted a[j .. n-1] */

		/* assume the min is the first element */
		int iMin = j;
		/* test against elements after j to find the smallest */
		//again move j+1 since the first element is the minimum and not to be compared to by itself
		for ( i = j+1; i < n; i++) {
			/* if this element is less, then it is the new minimum */
			if (A[i] < A[iMin]) {
				/* found new minimum; remember its index */
				iMin = i;
			}
		}
		//[-2,1,3] j = 0; iMin = 0; i = 1;
		//swap elements unless no other minimum is found i.e. already sorted
		if(iMin != j) {
			swap(A[j], A[iMin]);
		}
	}
}

int main(){
	return 0;
}
