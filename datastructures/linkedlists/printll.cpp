//print out linked list
#include <stdio.h>
#include <stdlib.h>

struct Node {
	int data;
	struct Node* next;
};

void Print (Node *head) {
	Node* curr = head;
	while (curr){
		printf("%d\n", curr->data);
		curr=curr->next;
	}
}

int main(){
	Node* test = new Node();
	test->data = 3;
	test->next = NULL; 

	Node* test2 = new Node();
	test2->data = 5;
	test2->next = test; 

	Print(test2);
	return 0;
}






