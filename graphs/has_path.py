#!/usr/bin/env python
# experimenting with using double queues for bfs for better generality
# in higher dimensions
def has_path(maze, start, destination):
    """
    Note how I didn't need to size up the neighbors because
    we arent required to separate each level.
    :type maze: List[List[int]]
    :type start: List[int]
    :type destination: List[int]
    :rtype: bool
    """
    # queues kept in sync
    row_queue = []
    col_queue = []
    
    row_start, col_start = start
    row_queue.append(row_start)
    col_queue.append(col_start)
    
    row_directions = [-1, 0, 1, 0]
    col_directions = [0, 1, 0, -1]
    
    row_count = len(maze)
    col_count = len(maze[0])
    
    row_dest, col_dest = destination
    
    while len(row_queue) > 0:
        curr_row = row_queue.pop(0)
        curr_col = col_queue.pop(0)
        # mark as visited
        maze[curr_row][curr_col] = 1
        for i in range(len(row_directions)):
            next_row = curr_row + row_directions[i]
            next_col = curr_col + col_directions[i]
            
            if next_row < 0 or next_row >= row_count:
                continue
            if next_col < 0 or next_col >= col_count:
                continue

            if next_row is row_dest and next_col is col_dest:
                return True
            
            if maze[next_row][next_col] is 0:
                row_queue.append(next_row)
                col_queue.append(next_col)
                
    return False
            
            
def main():
    maze = [
            [0,0,1,0,2],
            [0,0,0,0,0],
            [0,0,0,1,0],
            [1,1,0,1,1],
            [0,0,0,0,3]
            ]
    res = has_path(maze, [0,4], [4,4])
    assert(res is True)


    maze = [
            [0,0,1,0,2],
            [0,0,0,0,0],
            [0,0,0,1,0],
            [1,1,1,1,1],
            [0,0,0,0,3]
            ]

    res = has_path(maze, [0,4], [4,4])
    assert(res is False)
            
main()
        
        
