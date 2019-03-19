#!/usr/bin/env python3
"""
return redundant edge, last in edge array
if guaranteed to have cycle
"""
def cycleDetect(edges):
    def find(vertex): 
        while vertex is not disjointSet[vertex]:
            vertex = disjointSet[vertex]
        return vertex

    def union(u, v):
        root1 = find(u)
        root2 = find(v)
        if root1 is root2:
            return u,v
        else:
            disjointSet[root1] = root2

    print('ran')
    # construct the disjoint set
    disjointSet = {}
    for i in range(6):
        disjointSet[i] = i

    print(disjointSet)

    for [u, v] in edges:
        if union(u,v) is not None:
            return u,v

    return None

def main():
    edges = [[1,2], [1,3], [2,3]]
    res = cycleDetect(edges)
    print('expect [2,3] : actual', res)
    edges = [[1,2], [2,3], [3,4], [1,4], [1,5]]
    res = cycleDetect(edges)
    print('expect [1,4]: actual', res)

main()
