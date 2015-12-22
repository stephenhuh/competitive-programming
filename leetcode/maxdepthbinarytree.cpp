class Solution {
public:
	int maxDepth(TreeNode* root) {
		if (root == NULL){
			return 0;
		}
		return maxDepth(std::max(root->left, root->right)) + 1;
	}
}
