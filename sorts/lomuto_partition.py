#!/usr/bin/env python3

# less than lomuto
def lomuto_partition(arr):
    print('run')
    # choose rightmost el as pivot
    right = len(arr) - 1
    pivot = arr[right]
    i = 0
    for j in range(right):
        if arr[j] < pivot:
            arr[i], arr[j] = arr[j], arr[i]
            i += 1
    # swap pivot into its correct place: i
    arr[i], arr[right] = arr[right], arr[i]
    print(arr)
    return i

def lomuto_partition_for_select(arr, l, r):
    pivot = arr[r]
    i = 0
    for j in range(right):
        if arr[j] < pivot:
            arr[i], arr[j] = arr[j], arr[i]
            i += 1
    # swap pivot into its correct place: i
    arr[i], arr[r] = arr[r], arr[i]
    print(arr)
    return i


def select(arr, k):
    pivot_idx = partition(arr, l, r)
    l = 0
    r = len(arr) - 1
    if l is r:
        return arr[l]
    elif l < r:
        return select(arr, l, pivot_idx, k)
    else:



def main():
    arr = [1,3,5,2]
    print('starting arr: ', arr, 'pivot: ', 2)
    lomuto_partition(arr)

    arr = [1,-3, 40, 50, 900, 10,3,5,2]
    print('starting arr: ', arr, 'pivot: ', 2)
    lomuto_partition(arr)

main()
