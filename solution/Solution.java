// Solution in JAVA
class Solution {
    public int smallestDistancePair(int[] nums, int k) {
        // Sort the input array in ascending order
        Arrays.sort(nums);
        
        // Initialize the search range for the kth smallest distance pair
        int low = 0;
        int high = nums[nums.length - 1] - nums[0];
        
        // Perform a binary search on the possible distances
        while (low < high) {
            // Calculate the mid distance
            int mid = low + (high - low) / 2;
            
            // Count the number of pairs with a distance less than or equal to mid
            int count = countPairsWithSumMid(nums, mid);
            
            // If the count is greater than or equal to k, update the high value to mid
            if (count >= k) {
                high = mid;
            } 
            // Otherwise, update the low value to mid + 1
            else {
                low = mid + 1;
            }
        }
        
        // Return the kth smallest distance pair
        return low;
    }

    // Function to count the number of pairs with a distance less than or equal to the given sum
    private int countPairsWithSumMid(int[] nums, int sum) {
        int count = 0;
        int left = 0;
        
        // Iterate through the array with the right pointer
        for (int right = 1; right < nums.length; right++) {
            // Move the left pointer to the right until the distance between the elements at the right and left pointers is greater than the given sum
            while (nums[right] - nums[left] > sum) {
                left++;
            }
            // Count the number of pairs with a distance less than or equal to the given sum
            count += right - left;
        }
        
        // Return the count
        return count;
    }
}