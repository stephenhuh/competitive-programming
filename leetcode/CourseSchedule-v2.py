class Solution(object):
    def canFinish(self, numCourses, prerequisites):
        # construct graph representation as adjacency list
        graph = {}
        for i in range(numCourses):
            graph[i] = []
        
        for dest, src in prerequisites:
            graph[src].append(dest)
            
        white_set = set()
        black_set = set()
        gray_set = set()
        
        for i in range(numCourses):
            white_set.add(i)
        
        while len(white_set) > 0:
            curr = next(iter(white_set))
            hasCycle = self.dfs(curr, white_set, gray_set, black_set, graph)
            if hasCycle: return False
                
        return True

    def dfs(self, curr, white_set, gray_set, black_set, graph):
        # move from white to gray to indicate current processing
        white_set.remove(curr)
        gray_set.add(curr)
        
        # process neighbors
        for neighbor in graph[curr]:
            if neighbor in black_set: continue
            if neighbor in gray_set: return True
            if self.dfs(neighbor, white_set, gray_set, black_set, graph): 
                return True
            
        # move from gray to black
        gray_set.remove(curr)
        black_set.add(curr)
        return False
        
        
