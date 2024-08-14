// Solution in JS
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function(nums, k) {
    // Sort the input array in non-decreasing order to facilitate the binary search
    nums.sort((a, b) => a - b);
    
    // Get the length of the input array
    let len = nums.length;
    
    // Define a helper function to check if a given distance is feasible
    // A distance is feasible if there are at least k pairs of integers in the array with a distance less than or equal to it
    const feasible = (distance) => {
        let count = 0, fast = 0, slow = 0;
        // Use two pointers, fast and slow, to count the number of pairs with a distance less than or equal to the given distance
        while (slow < len || fast < len) {
            // Move the fast pointer to the right until the distance between nums[fast] and nums[slow] is greater than the given distance
            while (fast < len && nums[fast] - nums[slow] <= distance) {
                fast++;
            }
            // Count the number of pairs with a distance less than or equal to the given distance
            count += fast - slow - 1;
            slow++;
        }
        // Return true if the count is greater than or equal to k, indicating that the distance is feasible
        return count >= k;
    };
    
    // Initialize the search range for the kth smallest distance pair
    // The minimum possible distance is 0 (when two numbers are the same)
    // The maximum possible distance is the difference between the largest and smallest numbers in the array
    let [left, right] = [0, nums[len - 1] - nums[0]];
    
    // Perform a binary search to find the kth smallest distance pair
    while (left < right) {
        // Calculate the midpoint of the current search range
        let mid = left + Math.floor((right - left) / 2);
        
        // Check if the midpoint is a feasible distance
        if (feasible(mid)) {
            // If the midpoint is feasible, it means the kth smallest distance pair is less than or equal to the midpoint
            // Update the right endpoint of the search range to midpoint
            right = mid;
        } else {
            // If the midpoint is not feasible, it means the kth smallest distance pair is greater than the midpoint
            // Update the left endpoint of the search range to midpoint + 1
            left = mid + 1;
        }
    }
    
    // Return the kth smallest distance pair, which is the left endpoint of the final search range
    return left;
};