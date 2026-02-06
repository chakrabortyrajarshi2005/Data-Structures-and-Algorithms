Minimum Absolute Difference
Accepted
easy

Tags

Companies

Hints
Given an array arr consisting of distinct integers, identify every pair of elements whose absolute difference is the smallest among all possible pairs in the array.

For each qualifying pair [a, b] the following must hold:

a and b are elements of arr

a < b

b - a equals the minimum absolute difference that occurs between any two elements of arr

Return all such pairs sorted in ascending order based on the first element of each pair (and consequently the second element as well).

Example 1

Input: arr = [7, 3, 5, 9]
Output: [[3,5],[5,7],[7,9]]
Explanation: The smallest absolute difference is 2. The pairs (3,5), (5,7) and (7,9) each have this difference, and they are returned in increasing order.
Example 2

Input: arr = [2, 11, 14, 17, 21]
Output: [[11,14], [14,17]]
Explanation: The smallest absolute difference is 3. The pairs (11,14) and (14,17) each have this difference, and they are returned in increasing order.
Example 3

Input: arr = [12, -3, 8, -7, 4, -1]
Output: [[-7,-3],[-3, -1],[4,8]]
Explanation: The smallest absolute difference is 4. The pairs (-7,-3), (-3,-1) and (4,8) satisfy this condition and are listed in ascending order.
Constraints
1 <= arr.length <= 10^5

-10^9 <= arr[i] <= 10^9

All elements in arr are distinctclass Solution {
    /**
     * Finds all pairs with the minimum absolute difference.
     * @param {number[]} arr - array of distinct integers
     * @returns {number[][]} - list of pairs [a, b] where a < b
     */
    closestNumberPairs(arr) {

        // Step 1: Sort the array
        arr.sort((a, b) => a - b);

        let minDiff = Infinity;
        let result = [];

        // Step 2: Find minimum difference
        for (let i = 1; i < arr.length; i++) {
            let diff = arr[i] - arr[i - 1];

            if (diff < minDiff) {
                minDiff = diff;
            }
        }

        // Step 3: Collect all pairs with that diff
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] - arr[i - 1] === minDiff) {
                result.push([arr[i - 1], arr[i]]);
            }
        }

        return result;
    }
}
