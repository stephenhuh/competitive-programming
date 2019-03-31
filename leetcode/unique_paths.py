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

