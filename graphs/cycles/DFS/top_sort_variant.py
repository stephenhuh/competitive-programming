# CURRENTLY BUGGY
#!/usr/bin/env python3
def canFinish(numCourses, prerequisites):
    # top sort version
    # construct adj list
    graph = {}
    for i in range(numCourses):
        graph[i] = []
    
    for dest, src in prerequisites:
        graph[src].append(dest)
    
    visited = set()
    
    print(graph)
    # iterate over the keys
    for curr_node in graph:
        # dont dfs on visited nodes
        if curr_node not in visited:
            has_cycle = dfs(curr_node, visited, graph)
            if has_cycle: return False
        
    return True
    
    
def dfs(curr_node, visited, graph):
    print(curr_node, visited)
    if curr_node in visited:
        print('curr_node has been visited')
        return True
    visited.add(curr_node)
    
    for neighbor in graph[curr_node]:
        print('neighbor recurse:', neighbor)
        if dfs(neighbor, visited, graph): return True
    
    return False

if __name__ == '__main__':
    numCourses = 2
    prerequisites = [[0,1]]
    res = canFinish(numCourses, prerequisites)
    assert(res is True)

    numCourses = 2
    prerequisites = [[1,0], [0,1]]
    #has_cycle = canFinish(numCourses, prerequisites)
    #assert(has_cycle is False)

    numCourses = 3
    prerequisites= [[1,0], [2,1], [0, 2]]
    finish = canFinish(numCourses, prerequisites)
    assert(finish is False)


