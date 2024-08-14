// Solution in GO
import (
    "sort"
)

func smallestDistancePair(nums []int, k int) int {
    // Sort the input array in non-decreasing order
    sort.Ints(nums)
    
    // Get the length of the input array
    length := len(nums)
    
    // Initialize the search range for the kth smallest distance pair
    // The minimum possible distance is 0 (when two numbers are the same)
    // The maximum possible distance is the difference between the largest and smallest numbers in the array
    l, r := 0, nums[length - 1] - nums[0]
    
    // Perform a binary search to find the kth smallest distance pair
    for l < r {
        // Calculate the midpoint of the current search range
        guess := l + (r - l) / 2
        
        // Initialize a counter to count the number of pairs with a distance less than or equal to the current guess
        count := 0
        
        // Initialize two pointers, i and j, to count the number of pairs with a distance less than or equal to the current guess
        i, j := 0, 1
        
        // Iterate through the array to count the number of pairs with a distance less than or equal to the current guess
        for i < length {
            // Move the fast pointer j to the right until the distance between nums[j] and nums[i] is greater than the current guess
            for j < length && nums[j] - nums[i] <= guess {
                j++
            }
            
            // Count the number of pairs with a distance less than or equal to the current guess
            count = count + (j - i - 1)
            
            // Move the slow pointer i to the right
            i++
        }
        
        // Check if the count is greater than or equal to k
        if count >= k {
            // If the count is greater than or equal to k, it means the kth smallest distance pair is less than or equal to the current guess
            // Update the right endpoint of the search range to the current guess
            r = guess
        } else {
            // If the count is less than k, it means the kth smallest distance pair is greater than the current guess
            // Update the left endpoint of the search range to the current guess + 1
            l = guess + 1
        }
    }
    
    // Return the kth smallest distance pair, which is the left endpoint of the final search range
    return l
}