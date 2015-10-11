#include <stdio.h>
#include <stdlib.h>

struct Node{
		int data;
		Node* next;
};


Node* InsertNth(Node *head, int data, int position){
	Node* addon = new Node;
	addon->data = data;
	addon->next = NULL;

	if (!head){ //if empty list
		head = addon;
	} else if (position == 0) {
		addon->next = head;
		return (head = addon);
	} else {
		Node* temp = head;
		while (position-- != 1) { //stop at position - 1
			temp = temp->next;
		}
		addon->next = temp->next;
		temp->next = addon;
	};
	return head;
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
	test->data = 4;
	test->next = NULL; 

	Node* test2 = new Node();
	test2->data = 2;
	test2->next = test; 

	Print(test2);

	return 0;
}
