//compressed but different behavior by initiating both to head.
var hasCycle = function(head) {
    if (!head) return false;
    let slow = head, fast = head; //could be null
    
    while (fast.next != null && fast.next.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        if (fast == slow) return true;
    }
    
    return false;
};


// My original
var _hasCycle = function(head) {
    if (!head) return false;
    let slow = head, fast = head.next; //could be null
    
    while (fast != null && fast.next != null && fast.next.next != null) {
        if (fast == slow) return true;
        slow = slow.next;
        fast = fast.next.next;
    }
    
    return false;
};
