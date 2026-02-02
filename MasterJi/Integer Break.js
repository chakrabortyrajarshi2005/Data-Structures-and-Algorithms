Integer Break
Accepted
hard

Tags

Companies

Hints
Given an integer n, split it into a sum of k positive integers where k ≥ 2. Among all possible ways to break n, you need to maximize the product of the resulting integers and return that maximum product.

Example 1:

Input: n = 2
Output: 1
Explanation: The only valid split is 1 + 1, and 1 × 1 = 1.
Example 2:

Input: n = 10
Output: 36
Explanation: One optimal split is 3 + 3 + 4, giving a product of 3 × 3 × 4 = 36, which is the largest possible.
Constraints
2 \le n \le 58

k \ge 2 (the split must contain at least two positive integers)

All split parts are positive integers

Submissions 2

Acceptance Rate 100%class Solution {
  /**
   * @param {number} n - the integer to split
   * @return {number} maximum product achievable by splitting n into at least two positive integers
   */
  maxProduct(n) {
    if (n === 2) return 1;
    if (n === 3) return 2;

    let product = 1;

    while (n > 4) {
      product *= 3;
      n -= 3;
    }

    return product * n;
  }
}
