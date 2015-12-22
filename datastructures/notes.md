#Linked Lists
* head is just a pointer to a node within the linked list not the actual node itself
* while (temp->next != NULL) temp = temp->next means to traverse to the end of the list and have temp point to that very last node

##BIG O
note that the operations are independent of traversing to perform the operation
access - O(n)
search - O(n)
insertion - O(1)
deletion - O(1)

##Array BIG O
frequently linked lists are compared to arrays which are a bit different because they are indexed
access - O(1)
search - O(n)
Insertion - O(n)
deletion - O(n)


time complexity? space complexity?

#TREE
* height of tree = number of edges in longest path from root to a leaf node
thus height of a leaf node is 0

depth of a node = no of edges from root to that node

##TRAVERSAL
* Breadth-first traversal -- visit complete sub-tree in one direction, and then proceed to next sub-tree
* Preorder - root, left, right
* Inorder - left, root, right
* Postorder - left, right, root 
Time complexityO(n)
Space complexity: O(h)

stack frames must clear
##DRAW OUT HEAP AND STACK FRAMES

##BST
a binary tree in which for each node, value of all the nodes in left subtree is less or equal and value of all th enodes in right subtree is greater

in-order traversal always looks for minimum value i.e. leftmost child


* min-heap vs max-heap



