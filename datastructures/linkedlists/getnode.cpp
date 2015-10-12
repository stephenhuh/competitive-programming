#include <stdio.h>
#include <stdlib.h>

struct Node{
		int data;
		Node* next;
};

int GetNode(Node *head, int positionFromTail){
	Node* cp = head;
	int c = 0, a = 0;
	while (cp->next){
		cp = cp->next;	
		c++;
	}
	c -= positionFromTail;

	while (c--) {
		cp = cp->next;
	}
	return cp->data;
};

int CompareLists(Node *headA, Node* headB){
	  // This is a "method-only" submission.   
  // You only need to complete this method   
   while((headA!= NULL) || (headB!= NULL)){  
     if((headA == NULL) || (headB == NULL))  
       return 0;  
     if(headA->data != headB->data){  
       return 0;  
     }  
     headA = headA->next;  
     headB = headB->next;  
   }  
   return 1;  
};

//must declare outside temp for this method
//try it iteratively and with only one pointer!
struct Node* temp;
Node* Reverse(Node *head){
	if (head->next == NULL){
		temp = head;	
		return temp;
	};
	Reverse (head->next);
	struct Node* q = head->next;
	q->next = head;
	head->next = NULL;
	return temp;
};

void ReversePrint(Node* head){
	//use recursion
	if (!head){
		return;	
	}
	ReversePrint(head->next);
	printf("%d\n", head->data);
}

//this can also be done with a pointer to the ndoe that must be freed
Node* Delete(Node* head, int position){
	//corner cases: list empty || pos == 0
	if (!head) {
		exit(1);
	} else if (position == 0) {
		Node* temp = head;
		free(head); //delete?
		temp = head->next;
		head = temp;
		} else {
		//traverse list till 1 before pos
		Node* temp = head;
		Node* temp2 = head;
		while (position-- != 1){
			temp = temp->next;
		}
		//free pos
		free(temp->next);
		//link pos-1 to pos+1
		temp2 = temp->next->next;
		temp->next = temp2;
	}
	return head;
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
