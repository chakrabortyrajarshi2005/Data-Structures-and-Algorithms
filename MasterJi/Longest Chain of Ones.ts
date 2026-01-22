Longest Chain of Ones
Accepted
easy

Tags

Companies

Hints
Given a binary array nums, return the maximum number of consecutive 1's in the array. The task is to determine the longest sequence of ones in the binary list, where ones represent consecutive occurrences of a certain condition.

For example, consider the following cases:

Example 1:

Input: nums = [1, 0, 1, 1, 0, 1]
Output: 2
Explanation: The first two occurrences of 1 and two 1s together form sequences. The maximum is two consecutive 1's.
Example 2:

Input: nums = [1, 1, 0, 1, 1, 1]
Output: 3
Explanation: The last three 1's are consecutive, forming the longest sequence of 1's.
Your goal is to identify such sequences of 1's in the input array and return the length of the longest sequence, ensuring that your solution is efficient enough to handle large inputs.

Constraints
1 <= nums.length <= 10^5

nums[i] is either 0 or 1

Submissions 39

Acceptance Rate 51.3%class Solution {
  longestChainOfOnes(nums: number[]): number {
    let maxCount = 0;
    let currentCount = 0;

    for (const num of nums) {
      if (num === 1) {
        currentCount++;
      } else {
        if (currentCount > maxCount) {
          maxCount = currentCount;
        }
        currentCount = 0;
      }
    }

    return currentCount > maxCount ? currentCount : maxCount;
  }
}
