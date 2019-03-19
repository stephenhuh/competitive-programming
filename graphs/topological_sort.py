#!/usr/bin/env python3
def topological_sort(graph):
    graph_size = len(graph)
    ordering = [None] * graph_size
    idx = graph_size - 1
    visited = set()

    for curr_node in graph:
        if curr_node not in visited:
            visited_nodes = []
            dfs(curr_node, visited, visited_nodes, graph)
            for node_id in visited_nodes:
                ordering[idx] = node_id
                print(idx)
                idx = idx - 1

    return ordering

def dfs(curr, visited, visited_nodes, graph):
    visited.add(curr)
    for neighbor in graph[curr]:
        if neighbor not in visited:
            dfs(neighbor, visited, visited_nodes, graph)
    visited_nodes.append(curr)


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

