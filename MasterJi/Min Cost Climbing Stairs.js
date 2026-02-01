Min Cost Climbing Stairs
hard

Tags

Companies

Hints
You are given an integer array cost where cost[i] denotes the price of the i‑th step on a staircase. After paying the cost for a step, you may move either one step forward or two steps forward.

You may start your climb from step 0 or step 1. Your task is to compute the minimum total cost required to reach the position just beyond the last step (the "top" of the staircase).

Example 1
Input: cost = [10, 15, 20]
Output: 15
Explanation: Start at step 1, pay 15 and then take a two‑step jump to the top. The total cost is 15.
Example 2
Input: cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
Output: 6
Explanation: One optimal way is:
- Start at step 0, pay 1 and jump to step 2.
- Pay 1 at step 2 and jump to step 4.
- Pay 1 at step 4 and jump to step 6.
- Pay 1 at step 6 and move to step 7.
- Pay 1 at step 7 and jump to step 9.
- Pay 1 at step 9 and step to the top.
The total cost incurred is 6.
Constraints
2 <= cost.length <= 10^5

0 <= cost[i] <= 10^4

You may start from step 0 or step 1

You must reach the position just beyond the last step

Submissions 9


class Solution {
  /**
   * Computes the minimum total cost to reach the top of the staircase.
   * @param {number[]} cost - Array where cost[i] is the price of step i.
   * @return {number} Minimum cost to reach the step beyond the last index.
   */
  minCostClimbingStairs(cost) {
    const n = cost.length;

    let prev2 = 0; // dp[i - 2]
    let prev1 = 0; // dp[i - 1]

    for (let i = 2; i <= n; i++) {
      const curr = Math.min(
        prev1 + cost[i - 1],
        prev2 + cost[i - 2]
      );
      prev2 = prev1;
      prev1 = curr;
    }

    return prev1;
  }
}


Acceptance Rate 22.2%
