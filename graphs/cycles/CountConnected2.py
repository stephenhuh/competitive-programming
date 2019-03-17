class Solution:
    def countComponents(self, n: int, edges: List[List[int]]) -> int:
        uf = UnionFind()
        for i in range(n):
            uf.find(i)
            
        s = set()
        
        for u,v in edges:
            uf.union(u,v)
        
        for i in range(n):
            root = uf.find(i)
            s.add(root)
        
        return len(s)
            
        
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

