class Solution:
    def countComponents(self, n: int, edges: List[List[int]]) -> int:
        uf = UnionFind(n)
        #print(uf.parents)
        for u,v in edges:
            uf.union(u,v)
        
        s = set()
        for i in range(n):
            root = uf.find(i)
            s.add(root)
        
        return len(s)
            
        
class UnionFind:
    def __init__(self, len):
        self.parents = {}
        for i in range(len):
            self.make_set(i)
    
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
