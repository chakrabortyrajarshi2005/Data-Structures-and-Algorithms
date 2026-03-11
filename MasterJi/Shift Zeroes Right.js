Shift Zeroes Right
Accepted
medium

Tags

Companies

Hints
Given an integer array nums, move all 0s to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Explanation: All non-zero numbers are shifted to the front, and zeroes are moved to the end.
Example 2:

Input: nums = [0,0,1]
Output: [1,0,0]
Explanation: The only non-zero element retains its position relative to other non-zero elements, zeros moved to the end.
Constraints
1 <= nums.length <= 10^4

-2^31 <= nums[i] <= 2^31 - 1

Submissions 111

Acceptance Rate 34.2%class Solution {
  shiftZeroesRight(nums) {
    let lastNonZeroIndex = 0;

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) {
        [nums[lastNonZeroIndex], nums[i]] = [nums[i], nums[lastNonZeroIndex]];
        lastNonZeroIndex++;
      }
    }
    
    return nums;
  }
}
