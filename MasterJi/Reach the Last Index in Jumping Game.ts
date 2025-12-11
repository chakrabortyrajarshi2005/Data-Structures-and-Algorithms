Reach the Last Index in Jumping Game
medium

Tags

Companies

Hints
You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.

Example 1:

Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
Constraints:

1 <= nums.length <= 104

0 <= nums[i] <= 105

Constraints
1 <= nums.length <= 10^4

0 <= nums[i] <= 10^5

Submissions 65




class Solution {
    canJump(nums: number[]): boolean {
        const n = nums.length;
        if (n <= 1) return true;

        let maxReach = 0;
        const lastIndex = n - 1;

        for (let i = 0; i <= maxReach && i < n; i++) {
            const reachFromI = i + nums[i];
            if (reachFromI > maxReach) maxReach = reachFromI;
            if (maxReach >= lastIndex) return true;
        }
        return false;
    }
}


Acceptance Rate 43.1%
