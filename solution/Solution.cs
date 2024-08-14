// Solution in CS
public class Solution
{
    public int SmallestDistancePair(int[] nums, int k)
    {
        // Sort the input array in non-decreasing order to facilitate the binary search
        Array.Sort(nums);

        // Get the length of the input array
        int n = nums.Length;

        // Initialize the search range for the kth smallest distance pair
        // The minimum possible distance is 0 (when two numbers are the same)
        // The maximum possible distance is the difference between the largest and smallest numbers in the array
        int left = 0;
        int right = nums[n - 1] - nums[0];

        // Perform a binary search to find the kth smallest distance pair
        while (left < right)
        {
            // Calculate the midpoint of the current search range
            int mid = (left + right) / 2;

            // Count the number of pairs of integers in the array that have a distance less than or equal to the midpoint
            int count = 0;
            int j = 0;
            for (int i = 0; i < n; i++)
            {
                // Move the right pointer (j) to the right until the distance between nums[j] and nums[i] is greater than the midpoint
                while (j < n && nums[j] - nums[i] <= mid)
                {
                    j++;
                }
                // Count the number of pairs with a distance less than or equal to the midpoint
                count += j - i - 1;
            }

            // Adjust the search range based on the count
            if (count < k)
            {
                // If the count is less than k, it means the kth smallest distance pair is greater than the midpoint
                // Update the left endpoint of the search range to midpoint + 1
                left = mid + 1;
            }
            else
            {
                // Update the right endpoint of the search range to midpoint
                right = mid;
            }
        }

        // Return the kth smallest distance pair, which is the left endpoint of the final search range
        return left;
    }
}