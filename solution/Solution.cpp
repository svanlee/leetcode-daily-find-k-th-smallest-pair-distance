// Solution in CPP
class Solution
{
public:
    int smallestDistancePair(vector<int> &nums, int k)
    {
        // Sort the input array in ascending order
        sort(nums.begin(), nums.end());

        // Initialize the search range for the kth smallest distance
        int low = 0, high = nums.back() - nums[0];

        // Perform binary search on the possible distances
        while (low < high)
        {
            // Calculate the mid distance
            int mid = low + (high - low) / 2;

            // Count the number of pairs with a distance less than or equal to mid
            int cnt = 0, j = 0;
            for (int i = 0; i < nums.size(); i++)
            {
                // Move the right pointer j until the distance between nums[j] and nums[i] is greater than mid
                while (j < nums.size() && nums[j] - nums[i] <= mid)
                    j++;
                // Increment the count by the number of pairs with a distance less than or equal to mid
                cnt += j - i - 1;
            }

            // If the count is less than k, update the search range to [mid + 1, high]
            if (cnt < k)
                low = mid + 1;
            // Otherwise, update the search range to [low, mid]
            else
                high = mid;
        }

        // The kth smallest distance is the value of low
        return low;
    }
};