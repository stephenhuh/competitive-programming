class UnionFind(object):
    def __init__(self):
        self.parents = {}
    
    def make_set(self, x):
        self.parents[x] = x
        
    def find(self, x):
        if x not in self.parents:
            self.make_set(x)
            return x
        elif self.parents[x] == x:
            return x
        self.parents[x] = self.find(self.parents[x])
        return self.parents[x]
    
    def union(self, x, y):
        x_set = self.find(x)
        y_set = self.find(y)
        if x_set != y_set:
            self.parents[x_set] = y_set
            return True
        return False


class Solution(object):
    def findRedundantConnection(self, edges):
        """
        :type edges: List[List[int]]
        :rtype: List[int]
        """
        n=len(edges)
        uf = UnionFind()
        for x, y in edges:
            if not uf.union(x, y):
                return ((x,y))
