//given a binary tree, return all root-to-leaf paths
//question: does the return value have to be ordered in a certain way?
//
//draw test cases:
//
//given:
//binary tree
//
//return: vector of strings
//
//approach: traverse tree recursively, at each node concatenate?
//put each node into a list?
//then read out at the end
//how do we construct the return vector?

class Solution {
	public:
		vector <string> binaryTreePaths(TreeNode* root){
			if (root == NULL) return;
			//traverse
			int path[];
			vector<string> paths;
			paths(root->val + '0'); 
			binaryTreePaths(root->left);
			binaryTreePaths(root->right);
		}
		void binaryTreePaths(vector<string>& result, TreeNode* root, string t){
			if (!root->left && !root->right)	{
				result.push_back(t);
				return;
			}
			if (root->left) binaryTreePaths(result, root->left, t + '->' + to_string(root->left->val));
			if (root->right) binaryTreePaths(result, root->right, t + '->' + to_string(root->right->val));
		}
		vector<string> binaryTreePaths(TreeNode* root){
			vector<string> result;
			if(!root) return result;

			binaryTreePaths(result, root, to_string(root->val));
			return result;
		}
};

