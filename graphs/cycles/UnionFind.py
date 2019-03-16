#!/usr/bin/env python3
def hello():
    print('hello');

def cycleDetect(edges):
    def find(vertex): 
        while vertex is not disjointSet[vertex]:
            vertex = disjointSet[vertex]
        return vertex

    def union(u, v):
        root1 = find(u)
        root2 = find(v)
        if root1 is root2:
            return True
        else:
            disjointSet[root1] = root2

    print('ran')
    # construct the disjoint set
    disjointSet = {}
    for i in range(6):
        disjointSet[i] = i

    print(disjointSet)

    for [u, v] in edges:
        if union(u, v): return True

    return False

def main():
    edges = [[0,1], [0,5], [1,4], [1, 2], [2,3], [4, 3]]
    res = cycleDetect(edges)
    print(res)

main()

