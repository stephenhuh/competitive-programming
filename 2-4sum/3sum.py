# core algorithm is pretty well defined here
class Solution(object):
    def threeSum(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        non_unique_results = set()
        nums.sort()
        for idx, num in enumerate(nums[:-2]):
            target = num * -1
            if idx > 0 and num is nums[idx-1]: continue #optimization, not really core
            self.twoSum(nums[idx+1:], target, non_unique_results, num)
            
        return non_unique_results
            
    def twoSum(self, nums, target, non_unique_results, pivot):
        complements = set()
        for idx, num in enumerate(nums):
            complement = target - num
            if complement in complements:
                # note that when done this way, the tuple is still ordered as the pivot is the first element
                # complement has to have been seen
                candidate = (pivot, complement, num)
                if candidate not in non_unique_results:
                    non_unique_results.add(candidate)
            else:
                complements.add(num)
