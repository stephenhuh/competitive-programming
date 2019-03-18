def partition(a, l, r):
    x = a[r]
    i = l - 1
    for j in range(l, r):
        if a[j] <= x:
            i = i + 1
            a[i], a[j] = a[j], a[i]
    a[i + 1], a[r] = a[r], a[i + 1]
    return i + 1


def kthlargest(a, k):
    l = 0
    r = len(a) - 1
    split_point = partition(a, l, r) #choosing a pivot and saving its index
    if split_point == r - k + 1: #if the choosen pivot is the correct elemnt, then return it
        result = a[split_point]
    elif split_point > r - k + 1: #if the element we are looking for is in the left part to the pivot then call 'kthlargest' on that part after modifing k
        result = kthlargest(a[:split_point], k - (r - split_point + 1))
    else: #if the element we are looking for is in the left part to the pivot then call 'kthlargest' on that part
        result = kthlargest(a[split_point + 1:r + 1], k)
    return result

a = [1, 3, 2, 5, 7, 6, 8, 9, 4]
print(kthlargest(a, 4))
