
# Python3 implementation of the approach  
  
# Global array for hole values  
hole = [ 1, 0, 0, 0, 1, 0, 1, 0, 2, 1 ]  
  
# Function to return the count  
# of holes in num  
def countHoles(num):  
  
    holes = 0
  
    while (num > 0) : 
      
        # Last digit in num  
        d = num % 10
  
        # Update holes  
        holes = holes + hole[d]  
  
        # Remove last digit  
        num = num // 10
      
    # Return the count of holes  
    # in the original num  
    return holes 
      
# Driver code  
num = 6457819
print(countHoles(num)) 
  
# This code is contributed by ihritik 
