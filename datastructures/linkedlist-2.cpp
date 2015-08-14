#include <stdio.h>
#include <stdlib.h>

struct Node{
		int data;
		Node* next;
};


Node* Insert(Node *head, int data){
		Node* curr = head;
		Node* addon = new Node();
		addon->data = data;
		curr->next = addon;
		if (!head)
			return addon;
		
		while (curr->next){
			curr = curr->next;	
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

	Node* test2 = new Node();
	test2->data = 2;
	test2->next = test; 

	Insert(Insert(Insert(test2, 3), 4), 1);
	Print(test2);

	return 0;
}
