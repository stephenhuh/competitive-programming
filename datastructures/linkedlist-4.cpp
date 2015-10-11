#include <stdio.h>
#include <stdlib.h>

struct Node{
		int data;
		Node* next;
};


Node* InsertNth(Node* head, int data, int position){
	//create new node
	Node* add = new Node();
	add->data = data;
	add->next = NULL;
	//empty list
	if (!head){
		head = add;
	} else {
		Node* curr = head;
		while (curr->next)
			curr = curr->next;
		
	
	
	
	
	
	};
	return head;
};
