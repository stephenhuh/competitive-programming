# see sliding window solution in js which uses O(nlogn)
class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        maxLength = 0
        numbers = set(nums)
        while len(numbers) > 0:
            length = 1
            num = numbers.pop()
            low, high = num-1, num +1
            
            while low in numbers:
                length += 1
                numbers.remove(low)
                low -= 1
            
            while high in numbers:
                length += 1
                numbers.remove(high)
                high+=1
            
            maxLength = max(maxLength, length)
            
        return maxLength
