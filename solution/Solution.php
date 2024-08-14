// Solution in PHP

class Solution {

/*
* @param Integer[] $nums
* @param Integer $k
* @return Integer
*/
function smallestDistancePair($nums, $k) {
// Sort the input array in ascending order
sort($nums);

// Initialize the lower and upper bounds for the binary search
$low = 0;
$high = $nums[count($nums) - 1] - $nums[0];

// Perform binary search to find the smallest distance pair
while ($low < $high) { // Calculate the midpoint of the current range $mid=$low + floor(($high - $low) / 2); // Count
    the number of pairs with a distance less than or equal to $mid $count=$this->countPairs($nums, $mid);

    // If the count is less than $k, update the lower bound
    if ($count < $k) { $low=$mid + 1; } // Otherwise, update the upper bound else { $high=$mid; } } // Return the
        smallest distance pair return $low; } /** * Count the number of pairs with a distance less than or equal to $mid
        * * @param Integer[] $nums * @param Integer $mid * @return Integer */ private function countPairs($nums, $mid) {
        $count=0; $left=0; // Iterate through the array to count the pairs for ($right=0; $right < count($nums);
        $right++) { // Move the left pointer to the right until the distance exceeds $mid while ($nums[$right] -
        $nums[$left]> $mid) {
        $left++;
        }

        // Increment the count by the number of elements at or to the left of the left pointer
        $count += $right - $left;
        }

        // Return the count of pairs
        return $count;
        }
        }