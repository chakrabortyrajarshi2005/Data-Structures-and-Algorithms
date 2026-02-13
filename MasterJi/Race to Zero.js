Race to Zero
Accepted
medium

Tags

Companies

Hints
Given two non-negative integers num1 and num2.

In one operation, if num1 >= num2, you must subtract num2 from num1; otherwise, subtract num1 from num2.

For example, if num1 = 7 and num2 = 3, subtract num2 from num1, thus obtaining num1 = 4 and num2 = 3. However, if num1 = 3 and num2 = 7, after one operation, num1 = 3 and num2 = 4.

Return the number of operations required to make either num1 = 0 or num2 = 0.

Example 1:

Input: num1 = 4, num2 = 6
Output: 3
Explanation: 
- Operation 1: num1 = 4, num2 = 6. Since num1 < num2, subtract num1 from num2 → num2 = 6 - 4 = 2. Now, num1 = 4, num2 = 2.
- Operation 2: num1 = 4, num2 = 2. Since num1 >= num2, subtract num2 from num1 → num1 = 4 - 2 = 2. Now, num1 = 2, num2 = 2.
- Operation 3: num1 = 2, num2 = 2. Since num1 >= num2, subtract num2 from num1 → num1 = 2 - 2 = 0. Now, num1 = 0, num2 = 2.
Since num1 is 0, we stop. The total number of operations is 3.
Example 2:

Input: num1 = 5, num2 = 5
Output: 1
Explanation: 
- Operation 1: num1 = 5, num2 = 5. Since num1 >= num2, subtract num2 from num1 → num1 = 5 - 5 = 0. Now, num1 = 0, num2 = 5.
Since num1 is 0, we stop. The total number of operations is 1.
Constraints
0 <= num1, num2 <= 10^9

Submissions 83

Acceptance Rate 19.3%


Tags

Companies

Hint 1

Hint 2

Hint 3

JavaScript

JavaScript
1
2
3
4
5
6
7
class Solution {
  raceToZero(num1, num2) {
    // num1: first non-negative integer
    // num2: second non-negative integer
    return 0;
  }
}
Test Cases
Submission Results
Input
{"num1":4,"num2":6}

Expected Output
3class Solution {
  raceToZero(num1, num2) {
    let a = num1, b = num2, ops = 0;
    while (a !== 0 && b !== 0) {
      if (a >= b) {
        ops += Math.floor(a / b);
        a %= b;
      } else {
        ops += Math.floor(b / a);
        b %= a;
      }
    }
    return ops;
  }
}
