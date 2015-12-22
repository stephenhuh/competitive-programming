class Solution {
	public:
		void deleteNode(ListNode* node){
			if (node == NULL) return; //null param
			ListNode* temp = node->next;
			node->val = temp->val;
			node->next = temp->next;
			free (temp);
	}
};
