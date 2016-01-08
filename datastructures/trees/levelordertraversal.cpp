#include <iostream>
#include <queue>
using namespace std;

struct node{
	int data;
	node* left;
	node* right;
};

void LevelOrder(node* root){
	std::queue<node*> Q;
	if (root) Q.push(root);
	while (!Q.empty()){
		node* curr = Q.front();
		Q.pop();
		cout << curr->data << " ";
		if (curr->left) Q.push(curr->left);
		if (curr->right) Q.push(curr->right);
	}
	return;
}
