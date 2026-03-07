Wait for Warmer Days
Accepted
medium

Tags

Companies

Hints
Given an array of integers temperatures where each element represents the daily temperature, return an array answer such that answer[i] is the number of days you would have to wait after the ith day to encounter a warmer temperature. If there is no future day where this is possible, set answer[i] to 0.

Example 1:

Input: temperatures = [75, 76, 77, 73, 72, 74, 78, 75]
Output: [1, 1, 4, 2, 1, 1, 0, 0]
Example 2:

Input: temperatures = [31, 41, 51, 61]
Output: [1, 1, 1, 0]
Example 3:

Input: temperatures = [50, 70, 90]
Output: [1, 1, 0]
Constraints
1 <= temperatures.length <= 30000

30 <= temperatures[i] <= 100

Submissions 23

Acceptance Rate 43.5%class Solution {
  waitForWarmerDays(temperatures) {
    const n = temperatures.length;
    const answer = new Array(n).fill(0);
    const stack = [];

    for (let i = 0; i < n; i++) {
      while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
        const prevIndex = stack.pop();
        answer[prevIndex] = i - prevIndex;
      }
      stack.push(i);
    }

    return answer;
  }
}
