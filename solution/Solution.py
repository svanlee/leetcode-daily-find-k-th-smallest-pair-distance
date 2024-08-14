# Solution in PY
class Solution:
    def smallestDistancePair(self, nums, k):
        # Sort the input array in ascending order
        nums.sort()

        # Get the length of the input array
        n = len(nums)

        # Define a helper function func(x) to count the number of pairs with a distance less than or equal to x
        def func(x):
            # Initialize the count of pairs and the left and right pointers
            count, left, right = 0, 0, 0 

            # Iterate over the array with the right pointer
            for right in range(n):
                # Move the left pointer to the right until the distance between nums[right] and nums[left] is greater than x
                while nums[right] - nums[left] > x:
                    left += 1 
                # Count the number of pairs with a distance less than or equal to x
                count += right - left 

            # Return the count of pairs
            return count 

        # Initialize the search range for the kth smallest distance pair
        # low is the minimum possible distance (0) and high is the maximum possible distance (nums[-1] - nums[0])
        low, high = 0, nums[-1] - nums[0]

        # Perform a binary search to find the kth smallest distance pair
        while low <= high:
            # Calculate the mid distance
            mid = (low + high) // 2 

            # Count the number of pairs with a distance less than or equal to mid
            if func(mid) < k:
                # If the count is less than k, it means the kth smallest distance pair is greater than mid
                # Update the low value to mid + 1
                low = mid + 1 
            else:
                # Update the high value to mid - 1
                high = mid - 1 

        # Return the kth smallest distance pair
        return low