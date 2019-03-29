#!/usr/bin/env python3
def construct_segment_tree(arr, seg_tree, left, right, pos):

    print('l:', left, 'r:', right, 'pos:', pos, seg_tree)

    ## handle leaves
    # [1:1], or [2:2] ... [n:n]
    if left is right:
        print('leaf')
        seg_tree[pos] = arr[left]
        return

    mid = (left + right) // 2

    ## post-order esque recursion ##
    # recurse the left child while halving
    construct_segment_tree(arr, seg_tree, left, mid, 2 * pos + 1)
    # recurse the right child while halving
    construct_segment_tree(arr, seg_tree, mid + 1, right, 2 * pos + 2)

    left_child = seg_tree[2*pos+1]
    right_child = seg_tree[2*pos+2]
    seg_tree[pos] = min(left_child, right_child)

if __name__ == '__main__':
    original = [-1,2,4,0] # power of 2
    res_tree = [float('inf')] * 7
    construct_segment_tree([-1,2,4,0], res_tree, 0, len(original) - 1, 0)
    print(res_tree)
    assert(res_tree == [-1,-1,0,-1,2,4,0])

    
