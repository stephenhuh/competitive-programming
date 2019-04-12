# hackerrank IXL
# Python3 Program to find minimum number  
# of manipulations required to make  
# two strings identical  
  
# Counts the no of manipulations  
# required  
def countManipulations(s1, s2):  
      
    count = 0
  
    # store the count of character  
    char_count = [0] * 26
      
    for i in range(26): 
        char_count[i] = 0
  
    # iterate though the first String  
    # and update count  
    for i in range(len(s1)):  
        char_count[ord(s1[i]) - 
                   ord('a')] += 1
  
    # iterate through the second string  
    # update char_count.  
    # if character is not found in  
    # char_count then increase count  
    for i in range(len(s2)):  
        char_count[ord(s2[i]) - ord('a')] -= 1
        if (char_count[ord(s2[i]) - 
                       ord('a')] < 0) : 
            count += 1
  
    return count 
  
# Driver code  
if __name__ == "__main__":  
  
    s1 = "ddcf"
    s2 = "cedk"
      
    print(countManipulations(s1, s2)) 
  
