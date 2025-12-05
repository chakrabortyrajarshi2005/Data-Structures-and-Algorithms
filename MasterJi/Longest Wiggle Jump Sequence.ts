Longest Wiggle Jump Sequence
Accepted
medium

Tags

Companies

Hints
Problem Title: Wiggle Wiggle
Problem Description:
Imagine you are attending a vibrant festival, and there is an engaging game called "Wiggle Wiggle" being played by a group of enthusiastic players. In this game, participants perform jumps in a sequence that must strictly alternate between "up" and "down" movements. An "up" movement is considered a positive difference, while a "down" movement is negative. Each jump must comply with the rule that if one jump moves up, the next must come down, or vice versa. Movements that don't alternate or have zero change are invalid.

For instance, the sequence [2, 9, 3, 10, 4, 7] is a valid wiggle sequence since the differences (7, -6, 7, -6, 3) alternate between positive and negative. However, [2, 5, 8, 3, 7] and [2, 9, 3, 4, 4] are not valid. The first sequence has the initial two differences both positive, and the latter ends with zero difference.

Your goal is to determine the length of the longest possible wiggle subsequence from a given sequence of integers. A subsequence can be derived by removing some elements (none or more) while maintaining their original sequence order.

Task:
Given an integer array nums, return the length of the longest wiggle subsequence.

Examples:
Example 1:

Input: nums = [2, 9, 3, 10, 4, 7]
Output: 6
Explanation: The entire sequence is a wiggle sequence with differences (7, -6, 7, -6, 3).
Example 2:

Input: nums = [3, 15, 10, 20, 14, 17, 12, 7, 18, 9]
Output: 7
Explanation: There are several subsequences that achieve this length. One such sequence is [3, 15, 10, 14, 12, 18, 9] with differences (12, -5, 4, -2, 6, -9).
Example 3:

Input: nums = [2, 3, 4, 5, 6, 7, 8, 9, 10]
Output: 2
Constraints:
1 <= nums.length <= 1000

0 <= nums[i] <= 1000

Note:
Can you implement a solution with an O(n) time complexity?

Constraints
1 <= nums.length <= 1000

0 <= nums[i] <= 1000
class Solution {
  longestWiggleSubsequence(nums: number[]): number {
    const n = nums.length;
    if (n === 0) return 0;
    if (n === 1) return 1;

    let prevDiff = 0;
    let count = 1;

    for (let i = 1; i < n; i++) {
      const diff = nums[i] - nums[i - 1];
      if ((diff > 0 && prevDiff <= 0) || (diff < 0 && prevDiff >= 0)) {
        count++;
        prevDiff = diff;
      }
    }

    return count;
  }
}
