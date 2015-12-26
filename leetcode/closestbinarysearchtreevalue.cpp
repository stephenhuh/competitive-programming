//given a non-empty bst and a target value, find value in bst that is closest to the target
//Given:
//a target avlue
//BST, all left tree nodes are less than root, all right nodes greater
//if you want closest you need to check left then move right most to node your val is in or right then left.
//test cases:
//no left subtree, but right exists
//just root given
//approach: 
//very much like insert
//
//
class Solution {
	public:
		//correct pseudocode:
		//compare absolute value differences from target to root, to root->left, to root->right
		int closestValue(TreeNode* root, double target){
			int a = root->val;
			auto kid  = target < a ? root->left : root->right;
			if (!kid) return a;
			int b = closestValue(kid, target);
			return abs(a-target) < abs(b-target) ? a : b;
		
		
		
		}
		int closestValue(TreeNode* root, double target){
			if (!root) return -1;
			//if theres no left and right or equal to root
			if (root->val == target || (!root->right && !root->left)) return root->val;
			TreeNode* curr = root;
			if (!root->right && target > root->val) return root->val;
			if (!root->left && target < root->val) return root->val;
			if (target < root->val){
				curr = curr->left;
				return closestValue(curr, target);
			} else if (target > root->val){
				curr = curr->right;
				return closestValue(curr, target);
			}
		}
};
