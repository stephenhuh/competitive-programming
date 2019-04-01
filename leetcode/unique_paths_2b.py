# memoized using padding technique - pad extra rows and cols
class Solution(object):
    def uniquePathsWithObstacles(self, obstacleGrid):
        """
        :type obstacleGrid: List[List[int]]
        :rtype: int
        """
        num_rows = len(obstacleGrid)
        num_cols = len(obstacleGrid[0])
        if num_rows is 0 or num_cols is 0 or obstacleGrid[0][0] is 1:
            return 0
        
        grid_copy = [[None] * (num_cols + 1) for row in range(num_rows +1)]
        
        return self.backtrack(obstacleGrid, 0, 0, num_rows, num_cols, grid_copy)
        
    
    def backtrack(self, grid, r, c, num_rows, num_cols, grid_copy):
        if r >= num_rows or c >= num_cols:
            return 0
        
        if grid[r][c] is 1:
            return 0
        
        if r is num_rows - 1 and c is num_cols - 1:
            return 1
        
        if grid_copy[r+1][c] is None:
            grid_copy[r+1][c] = self.backtrack(grid, r+1, c, num_rows, num_cols, grid_copy)
        if grid_copy[r][c+1] is None:
            grid_copy[r][c+1] = self.backtrack(grid, r, c+1, num_rows, num_cols, grid_copy) 
        
        return grid_copy[r+1][c] + grid_copy[r][c+1]
