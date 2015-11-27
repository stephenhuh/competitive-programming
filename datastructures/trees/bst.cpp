#include <stdio.h>
#include <stdlib.h>

struct BstNode{
	int data;
	BstNode* left;
	BstNode* right;
};

//iterative
int FindMin(BstNode* root){
	if (!root){
		cout << "Error: Tree is empty\n";
		return -1;
	}
	while (root->left != NULL){
		root = root->left;	
	}
	return root->data;
};

//recursive
int FindMin2(BstNode* root){
	if (root == NULL){
		cout <<"Error"	;
		return -1;
	}
	else if (root->left == NULL){
		return root->data;	
	}
	//search in left subtree
	return FindMin2(root->left);
}


//O(n)
//find height of subtrees, find max then + 1
int FindHeight (BstNode* root){
	if (!root){
		return -1;	
	}
	return max(FindHeight(root->left), FindHeight(root->right)) + 1;
	//find height of left subtree recursive

	//find height of right subtree recursive

}

void Preorder (BstNode* root){
	if (!root) return;
	cout << root->data;
	Preorder(root->left);
	Preorder(root->right);
}

void Postorder (BstNode* root){
	if (!root) return;
	Postorder(root->left);
	Postorder(root->right);
	cout << root->data << " ";
	return;
}

void Inorder (BstNode* root){
	if (!root) return;
	Inorder(root->left);
	cout << root->data << " ";
	Inorder(root->right);
	return;
}


