Check for Duplicates in an Array
Accepted
easy

Tags

Companies

Hints
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:
Input: nums = [1,2,3,1]
Output: true
Example 2:
Input: nums = [1,2,3,4]
Output: false
Example 3:
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
Constraints:
1 <= nums.length <= 10^5

-10^9 <= nums[i] <= 10^9

Constraints
1 <= nums.length <= 10^5

-10^9 <= nums[i] <= 10^9
class Solution {
  containsDuplicate(nums: number[]): boolean {
    const seen = new Set<number>();

    for (const num of nums) {
      if (seen.has(num)) {
        return true;
      }
      seen.add(num);
    }

    return false;
  }
}
