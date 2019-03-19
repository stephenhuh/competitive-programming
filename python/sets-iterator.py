#!/usr/bin/env python3

s = set()
s.update([1,2,3,4])
print('Set: ', s)

for item in s:
    print(item)

## lazy iterator
curr = next(iter(s))
print(curr)
curr = next(iter(s))
print(curr)

iterator = iter(s)
for item in iterator:
    print(item)
