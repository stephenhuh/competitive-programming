//using length
var getIntersectionNode = function(headA, headB) {
    let lengthA = 0, lengthB = 0, dhA = headA, dhB = headB;
    while (headA) {
        headA = headA.next;
        lengthA++;
    }
    while (headB) {
        headB = headB.next;
        lengthB++;
    }
    
    headA = dhA;
    headB = dhB;
    
    let shorter, longer, diff = Math.abs(lengthA - lengthB);
    
    if (lengthA < lengthB) {
        shorter = headA;
        longer = headB;
    } else {
        shorter = headB;
        longer = headA;
    }
    
    //align
    while (diff--) {
        longer = longer.next;
    }
    
    while (shorter && longer) {
        if (shorter == longer) return shorter;
        shorter = shorter.next;
        longer = longer.next;
    }
    
    return null;
};


function getIntersectionNode(headA, headB) {
  if (!headA || !headB) {
    return null;
  }

  let nodeA = headA;
  let nodeB = headB;

  // Traverse the list up to two times, swapping pointers after the first pass, which will account
  // for any difference in length. If there is no intersection, then both pointers will be null
  // after the second pass, and null is returned, as expected.
  while (nodeA !== nodeB) {
    nodeA = nodeA ? nodeA.next : headB;
    nodeB = nodeB ? nodeB.next : headA;
  }

  return nodeA;
}
