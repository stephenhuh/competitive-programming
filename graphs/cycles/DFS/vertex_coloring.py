# under debugging
class Solution(object):
    def canFinish(self, numCourses, prerequisites):
        # construct graph representation as adjacency list
        graph = {}
        for i in range(numCourses):
            graph[i] = []
        
        for dest, src in prerequisites:
            graph[src].append(dest)
        
        pink_set = set()
        for src in graph:
            if src in graph and len(graph[src]) > 0:
                pink_set.add(src)
            
        white_set = set()
        black_set = set()
        gray_set = set()
            
        white_set = pink_set
        print('init white', white_set, 'init graph', graph)
        
        while len(white_set) > 0:
            hasCycle = self.dfs(0, white_set, gray_set, black_set, graph)
            if hasCycle: return False
                
        return True

    def dfs(self, curr, white_set, gray_set, black_set, graph):
        print('currNode', curr)
        # move from white to gray to indicate current processing
        white_set.remove(curr)
        gray_set.add(curr)
        
        print('white', white_set)
        print('gray', gray_set)
        print('black', black_set)
        
        # process neighbors
        for neighbor in graph[curr]:
            print('current neighbor', neighbor)
            if neighbor in black_set: continue
            if neighbor in gray_set: return True
            print('recursing on', neighbor)
            if self.dfs(neighbor, white_set, gray_set, black_set, graph): 
                return True
            
        # move from gray to black
        gray_set.remove(curr)
        black_set.add(curr)
        return False
