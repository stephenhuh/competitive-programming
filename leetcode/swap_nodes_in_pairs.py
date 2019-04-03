class Solution:
    def swapPairs(self, head):
        dummy = ListNode(0)
        pre = dummy
        pre.next = head
        # ensure there's at least one node ahead to swap.
        while pre.next and pre.next.next:
            # set curr and ahead nodes
            a = pre.next
            b = pre.next.next
            
            # do a swap
            pre.next, a.next, b.next = b, b.next, a
            
            # move up
            pre = a
        return dummy.next
