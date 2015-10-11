#include <stdio.h>
#include <stdlib.h>

struct Node{
		int data;
		Node* next;
};

/*
Node* Insert(Node* head, int data){
	Node* curr = head;
	Node* add = new Node;
	add->data = data;
	add->next = NULL;
	while (curr->next != NULL){ //trying to access null object right here
		curr=curr->next;	
	}
	curr->next = add;
	if (!head)
		head = add;
	return head;
};
*/

Node* Insert(Node* head, int data){
	Node* add = new Node;
	add->data = data;
	add->next = NULL;
	//empty case
	if (!head){
		//account
		head = add;	
	} else {
		Node* curr = head;
		while (curr->next){
			curr = curr->next;
		}
		curr->next = add;
	}
	return head;
}


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

	Insert(Insert(Insert(test, 3), 9),0);
	Print(test);

	Print(Insert(NULL, 2));
	return 0;
}
