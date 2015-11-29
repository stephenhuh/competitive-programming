int height (node* root){
	if (!root) return 0;
	return max(height(root->left), height(root->right)) + 1;
}

int height (node* root){
	if (!root) return 0;
	int height = 0;
	queue<node *> q; 

	q.push(root);


	while (1){
		int nodeCount = q.size();
		if (nodeCount == 0){
			return height;	
		}
		
		height++;
		
		while (nodeCount > 0){
			node *node = q.front();
			q.pop();
			if (node->left != NULL)
				q.push(node->left);
			if (node->right != NULL)
				q.push(node->right);
			nodeCount--;
		}

	
	
	}
}



