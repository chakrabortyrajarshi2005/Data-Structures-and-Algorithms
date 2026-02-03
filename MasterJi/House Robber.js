House Robber
Accepted
medium

Tags

Companies

Hints
You are a skilled thief planning to loot a row of homes on a street. Each home contains a certain amount of cash, but adjacent homes are equipped with linked security systems that will trigger an alarm if both are broken into on the same night.

Given an integer array nums where nums[i] represents the amount of money in the i‑th home, determine the maximum total amount you can steal without ever robbing two neighboring homes.

Example 1:

Input: nums = [1, 2, 3, 1]
Output: 4
Explanation: Rob the first home (money = 1) and the third home (money = 3). Total = 1 + 3 = 4.
Example 2:

Input: nums = [2, 7, 9, 3, 1]
Output: 12
Explanation: Rob the first home (money = 2), the third home (money = 9) and the fifth home (money = 1). Total = 2 + 9 + 1 = 12.
Constraints
1 <= nums.length <= 10^5

0 <= nums[i] <= 10^4

Submissions 15

Acceptance Rate 26.7%class Solution {
    maxHeist(nums) {
        if (nums.length === 0) return 0;
        if (nums.length === 1) return nums[0];

        let prev2 = 0;
        let prev1 = 0;

        for (let n of nums) {
            let current = Math.max(prev1, prev2 + n);
            prev2 = prev1;
            prev1 = current;
        }

        return prev1;
    }
}
