Minimum Apples Addition to Organize Bags
Accepted
easy

Tags

Companies

Hints
John is a passionate fruit collector and has an interesting hobby of organizing his fruits in a line. He has a collection of fruit bags containing a certain number of fruits, which can be represented as an integer array nums (0-indexed). Every day, he ensures that each of his fruit bags contains more fruits than the one before it, thereby creating a strictly increasing order of fruit count.

However, he can only add more fruits to any bag; removing them is not an option. In a single operation, Hitesh can choose any bag and increment its fruit count by 1.

The task at hand is to determine the minimum number of operations required to make this arrangement strictly increasing. An array nums is strictly increasing if for all 0 <= i < nums.length - 1, nums[i] < nums[i+1]. If the array contains only one bag, it is trivially in a strictly increasing order.

Example 1:

Input: nums = [2,2,2]
Output: 3
Explanation: You can do the following operations:
1) Increment nums[1], so nums becomes [2,3,2].
2) Increment nums[2], so nums becomes [2,3,3].
3) Increment nums[2], so nums becomes [2,3,4].
Example 2:

Input: nums = [3,10,3,8,2]
Output: 15
Example 3:

Input: nums = [10]
Output: 0
Constraints
1 <= nums.length <= 5000

1 <= nums[i] <= 10^4
class Solution {
  minimumOperations(nums: number[]): number {
    let operations = 0;
    let prev = nums[0];

    for (let i = 1; i < nums.length; i++) {
      if (nums[i] <= prev) {
        const needed = prev + 1;
        operations += needed - nums[i];
        prev = needed;
      } else {
        prev = nums[i];
      }
    }

    return operations;
    return 0;
  }
}
