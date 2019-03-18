#!/usr/bin/env python3
def lomuto_partition(arr):
    print('run')
    # choose rightmost el as pivot
    right = len(arr) - 1
    pivot = arr[right]
    i = 0
    for j in range(right):
        if arr[j] < pivot:
            tmp = arr[i]
            arr[i] = arr[j]
            arr[j] = tmp
            i += 1
    # swap pivot into its correct place: i
    tmp = arr[i]
    arr[i] = pivot
    arr[right] = tmp
    print(arr)

def main():
    arr = [1,3,5,2]
    print('starting arr: ', arr, 'pivot: ', 2)
    lomuto_partition([1,3,5,2])

main()
