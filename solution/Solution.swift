// Solution in SWIFT
class Solution {
    func smallestDistancePair(_ nums: [Int], _ k: Int) -> Int {
        // Sort the input array in non-decreasing order
        let sortedNums = nums.sorted()
        
        // Define a helper function to check if a given distance is feasible
        // A distance is feasible if there are at least k pairs of integers in the array with a distance less than or equal to it
        func enough(_ distance: Int) -> Bool {
            var count = 0, i = 0, j = 0
            // Use two pointers, i and j, to count the number of pairs with a distance less than or equal to the given distance
            while i < sortedNums.count || j < sortedNums.count {
                // Move the fast pointer j to the right until the distance between sortedNums[j] and sortedNums[i] is greater than the given distance
                while j < sortedNums.count && sortedNums[j] - sortedNums[i] <= distance {
                    j += 1
                }
                // Count the number of pairs with a distance less than or equal to the given distance
                count += j - i - 1
                i += 1
            }
            // Return true if the count is greater than or equal to k, indicating that the distance is feasible
            return count >= k
        }
        
        // Initialize the search range for the kth smallest distance pair
        // The minimum possible distance is 0 (when two numbers are the same)
        // The maximum possible distance is the difference between the largest and smallest numbers in the array
        var left = 0, right = sortedNums.last! - sortedNums.first!
        
        // Perform a binary search to find the kth smallest distance pair
        while left < right {
            // Calculate the midpoint of the current search range
            let mid = left + (right - left) / 2
            
            // Check if the midpoint is a feasible distance
            if enough(mid) {
                // If the midpoint is feasible, it means the kth smallest distance pair is less than or equal to the midpoint
                // Update the right endpoint of the search range to midpoint
                right = mid
            } else {
                // If the midpoint is not feasible, it means the kth smallest distance pair is greater than the midpoint
                // Update the left endpoint of the search range to midpoint + 1
                left = mid + 1
            }
        }
        
        // Return the kth smallest distance pair, which is the left endpoint of the final search range
        return left
    }
}