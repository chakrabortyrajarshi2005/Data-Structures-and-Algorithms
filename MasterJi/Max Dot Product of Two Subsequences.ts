Max Dot Product of Two Subsequences
medium

Tags

Companies

Hints
Given two integer arrays arrA and arrB, find the maximum possible dot product between any pair of non‑empty subsequences taken from the two arrays, where the subsequences must have the same length.

A subsequence of an array is obtained by deleting zero or more elements without changing the order of the remaining elements. For example, [2, 4, 6] is a subsequence of [1, 2, 3, 4, 5, 6], while [4, 2, 6] is not.

The dot product of two subsequences of equal length k is defined as:

arrA[i1] * arrB[j1] + arrA[i2] * arrB[j2] + ... + arrA[ik] * arrB[jk]
where i1 < i2 < ... < ik are the indices chosen from arrA and j1 < j2 < ... < jk are the indices chosen from arrB.

Your task is to choose the subsequences so that this sum is as large as possible.

Example 1
Input: arrA = [2, 1, -2, 5], arrB = [3, 0, -6]
Output: 18
Explanation: Choose subsequence [2, -2] from arrA and [3, -6] from arrB.
The dot product is 2*3 + (-2)*(-6) = 18.
Example 2
Input: arrA = [3, -2], arrB = [2, -6, 7]
Output: 21
Explanation: Choose subsequence [3] from arrA and [7] from arrB.
The dot product is 3*7 = 21.
Example 3
Input: arrA = [-1, -1], arrB = [1, 1]
Output: -1
Explanation: Choose subsequence [-1] from arrA and [1] from arrB.
The dot product is -1*1 = -1.
Constraints
1 <= length of arrA, length of arrB <= 200

-100 <= arrA[i], arrB[i] <= 100

The chosen subsequences must be non‑empty and have the same length.

Indices in each subsequence must preserve the original order.

Submissions 11

Acceptance Rate 27.3%class Solution {
  maxDotProduct(arrA: number[], arrB: number[]): number {
    const n = arrA.length;
    const m = arrB.length;

    const dp: number[][] = Array.from({ length: n + 1 }, () =>
      Array(m + 1).fill(-Infinity)
    );

    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= m; j++) {
        const prod = arrA[i - 1] * arrB[j - 1];
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1], prod, dp[i - 1][j - 1] + prod);
      }
    }

    return dp[n][m];
  }
}
