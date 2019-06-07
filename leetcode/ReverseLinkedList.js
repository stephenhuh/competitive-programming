
/** Things to remember 
 * Reassign curr to head for readability
 * while(curr)
 * Return prev.
 **/
var iterativeReverseList = function(head) {
    let curr = head;
    let prev = null;
    
    while (curr) {
        let ahead = curr.next;
        curr.next = prev;
        prev = curr;
        curr = ahead;
    }
    
    return prev;
};


function recursiveReverseList(head) {
    if (!head || !head.next) {
        return head;
    }
    //Literally, the new head, the end of the list gets returned
    var newHead = recurisveReverseList(head.next);
    /**
     * e.g. 1 -> 2
     * head = 1
     * head.next = 2
     * A points 2 to 1.
     * 1 <- 2 
     * B points 1 to null instead of at 2 removing a cycle
     */
    head.next.next = head; // call A
    head.next = null; // call B
    return newHead;
}

/**
 * Without statement B:
 * 1 -> 2 -> 3 -> 4 becomes
 *  ->    
 * 1   2 <- 3 <- 4
 *  <- 
 *
 */
