//non O(1) space solution.
var isPalindrome = function(head) {
    let fwd = [];
    let prevHead = head;
    let curr = head;
    
    // go forward
    while (curr) {
        fwd.push(curr.val);
        curr = curr.next;
    }
    
    // reverse the list
    let bwd = [];
    let newHead = reverse(prevHead);
    curr = newHead;
    while (curr) {
        bwd.push(curr.val);
        curr = curr.next;
    }
    
    //compare the reverse is same as forward
    for (let i = 0; i < fwd.length; i++) {
        if (fwd[i] != bwd[i]) return false;
    }
    return true;
};

var reverse = function(head) {
    let curr = head;
    let prev = null;
    while (curr) {
        let ahead = curr.next;
        curr.next = prev;
        prev = curr;
        curr = ahead;
    }
    return prev;
}



/*
 * "O(1)" space.
 * 
 * */
var isPalindrome = function(head) {
    let length = 0;
    let curr = head;
    //get mid node
    let midNode = middleNode(head);
    let newHead = reverse(midNode);
    
    // traverse forward & backwards
    curr = head;
    while (curr && newHead) {
        if (curr.val !== newHead.val) return false;
        newHead = newHead.next;
        curr = curr.next;
    }
    return true;
};

var middleNode = function(head){
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
}
