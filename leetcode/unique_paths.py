def unique_paths(m,n):
    if m is 0 and n is 0: return 0
    if m is 0 and n is not 0: return 1
    if n is 0 and m is not 0: return 1
    num_col = m
    num_row = n
    # allocate grid
    grid = [[None for c in range(num_col)] for r in range(num_row)]


    # prefill known cells
    # bottom row
    for col in range(num_col):
        grid[num_row - 1][col] = 1

    # right column
    for row in range(num_row):
        grid[row][num_col - 1] = 1

    # work backwards
    for row in range(num_row -2, -1, -1 ):
        for col in range(num_col-2, -1, -1):
            grid[row][col] = grid[row+1][col] + grid[row][col+1]

    return grid[0][0]

count = unique_paths(3,3)
assert(count is 6)

count = unique_paths(0,0)
assert(count is 0)

count = unique_paths(3,0)
assert(count is 1)


# recursive with outside variable
def unique_paths_v2(m, n):
    num_col = m
    num_row = n
    grid = [[None for c in range(num_col)] for r in range(num_row)]

    # using function attribute
    unique_paths_v2.count = 0

    def recurse(r, c, grid):
        if r >= num_row or c >= num_col: 
            return
        if r is num_row - 1 and c is num_col - 1:
            unique_paths_v2.count += 1
            return 
        recurse(r+1, c, grid)
        recurse(r, c+1, grid)

    recurse(0,0, grid)
    return unique_paths_v2.count


print('v2', unique_paths_v2(3,3))

def unique_paths_backtrack(r, c, m, n):
    if r is m -1 and c is n - 1:
        return 1
    if r >= m or c >= n:
        return 0

    return unique_paths_backtrack(r+1, c, m, n) + unique_paths_backtrack(r, c+1, m, n)

print('backtrack', unique_paths_backtrack(0,0,3,3))
assert(unique_paths_backtrack(0,0,3,3) is 6)


