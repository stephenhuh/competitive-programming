class Solution(object):
    def updateMatrix(self, matrix):
        
        row_count = len(matrix)
        col_count = len(matrix[0])
        for i in range(row_count):
            for j in range(col_count):
                if matrix[i][j] > 0:
                    matrix[i][j] = self.shortest_path_to_zero(matrix, i, j, row_count, col_count)
        return matrix
    def shortest_path_to_zero(self, matrix, row_start, col_start, row_count, col_count):
        
        # queues are kept in sync
        row_queue = [row_start]
        col_queue = [col_start]
        
        row_directions = [-1, 0, 1, 0]
        col_directions = [0, 1, 0, -1]
        
        level_count = 0
        
        while len(row_queue) > 0:
            size = len(row_queue)
            
            while size > 0:
                curr_row = row_queue.pop(0)
                curr_col = col_queue.pop(0)
                size -= 1
                for i in range(len(row_directions)):
                    next_row = curr_row + row_directions[i]
                    next_col = curr_col + col_directions[i]
                    if next_row < 0 or next_row >= row_count: continue
                    if next_col < 0 or next_col >= col_count: continue
                
                    if matrix[next_row][next_col] is 0: 
                        return level_count + 1
                    else:
                        row_queue.append(next_row)
                        col_queue.append(next_col)
                        
            level_count += 1
        
        return -1
                    
                
                
                
            
        
            
