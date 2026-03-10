Maximum Sweetness Partition
medium

Tags

Companies

Hints
Given an integer array arr, partition the array into contiguous subarrays of length at most k. After partitioning, each subarray has their values changed to become the maximum value of that subarray.

Return the largest sum of the given array after partitioning.

Example 1:

Input: arr = [1,15,7,9,2,5,10], k = 3
Output: 84
Explanation: arr becomes [15,15,15,9,10,10,10]
Example 2:

Input: arr = [1,4,1,5,7,3,6,1,9,9,3], k = 4
Output: 83
Example 3:

Input: arr = [1], k = 1
Output: 1
Constraints
1 <= arr.length <= 500

1 <= arr[i] <= 10^9

1 <= k <= arr.length

Submissions 95

Acceptance Rate 30.5%class Solution {
    maxSumAfterPartitioning(arr, k) {
        const n = arr.length;
        const dp = new Array(n + 1).fill(0);

        for (let i = 1; i <= n; i++) {
            let currentMax = 0;
            for (let j = 1; j <= k && i - j >= 0; j++) {
                currentMax = Math.max(currentMax, arr[i - j]);
                dp[i] = Math.max(dp[i], dp[i - j] + currentMax * j);
            }
        }

        return dp[n];
    }
}
class Solution {
    maxSumAfterPartitioning(arr, k) {
        const n = arr.length;
        const dp = new Array(n + 1).fill(0);

        for (let i = 1; i <= n; i++) {
            let currentMax = 0;
            for (let j = 1; j <= k && i - j >= 0; j++) {
                currentMax = Math.max(currentMax, arr[i - j]);
                dp[i] = Math.max(dp[i], dp[i - j] + currentMax * j);
            }
        }

        return dp[n];
    }
}
