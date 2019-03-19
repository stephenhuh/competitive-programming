#!/usr/bin/env python3
class DisjointSet:
    def __init__(self):
        self.parent = {}

    def make_set(self, v):
        self.parent[v] = v

    def find(self, v):
        if v not in self.parent:
            self.make_set(v)
            return v
        elif self.parent[v] is not v:
            root_of_parent = self.find(self.parent[v])
            self.parent[v] = root_of_parent
            return self.parent[v]
        else:
            return self.parent[v]

ds = DisjointSet()

# single set
ds.parent[0] = 1
ds.parent[1] = 2
ds.parent[2] = 2


# find tests
print('** basic tests **')
parent_of_0 = ds.find(0)
assert(parent_of_0 is 2)
print('pass')

parent_of_1 = ds.find(1)
assert(parent_of_1 is 2)
print('pass')

parent_of_2 = ds.find(2)
assert(parent_of_2 is 2)
print('pass')

print('** path compression tests **')
# path compression tests
assert(ds.parent[0] is 2)
print('pass')
assert(ds.parent[1] is 2)
print('pass')
assert(ds.parent[2] is 2)
print('pass')
