#!/usr/bin/env python3
def topological_sort(graph):
    graph_size = len(graph)
    ordering = [None] * graph_size
    idx = graph_size - 1
    visited = set()

    for curr_node in graph:
        if curr_node not in visited:
            idx = dfs(idx, curr_node, visited, ordering, graph)

    return ordering

def dfs(idx, curr, visited, ordering, graph):
    visited.add(curr)
    for neighbor in graph[curr]:
        if neighbor not in visited:
            idx = dfs(idx, neighbor, visited, ordering, graph)

    ordering[idx] = curr
    return idx - 1


if __name__ == '__main__':
    dag = {
            'a' : ['b', 'c', 'd'],
            'b': ['j'],
            'c' :['f', 'i'],
            'd': ['g', 'e'],
            'e' : ['k', 'h'],
            'f': [],
            'g': [],
            'h': [],
            'i': [],
            'j': [],
            'k': []
        }
    ordering = topological_sort(dag)
    print('result is', ordering)
    assert(ordering[0] is 'a')

