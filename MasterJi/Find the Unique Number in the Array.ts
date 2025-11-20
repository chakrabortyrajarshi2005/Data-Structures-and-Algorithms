Find the Unique Number in the Array
Accepted
easy

Tags

Companies

Hints
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

Examples
Example 1:

Input: nums = [1,2,1,3,2]
Output: 3
Explanation: Every number appears twice except for the number '3'.
Example 2:

Input: nums = [4,1,2,1,2]
Output: 4
Explanation: Every number appears twice except for the number '4'.
Example 3:

Input: nums = [1]
Output: 1
Explanation: The array contains only one number.
Constraints
1 <= nums.length <= 3 * 10^4

-3 * 10^4 <= nums[i] <= 3 * 10^4

Each element in the array appears twice except for one element which appears once.

Submissions 168

Acceptance Rate 30.4%class Solution {
  findUniqueNumber(nums: number[]): number {
    let i: number;
    let result: number = 0;
    for (i = 0; i < nums.length; i++) {
      result ^= nums[i];
    }
    return result;
  }
}
