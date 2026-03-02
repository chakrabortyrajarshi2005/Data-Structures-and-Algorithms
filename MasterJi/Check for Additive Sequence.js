Check for Additive Sequence
medium

Tags

Companies

Hints
An additive number is a string whose digits can form an additive sequence.

A valid additive sequence should contain at least three numbers. Except for the first two numbers, each subsequent number in the sequence must be the sum of the preceding two.

Given a string containing only digits, return true if it is an additive number, or false otherwise.

Note: Numbers in the additive sequence cannot have leading zeros, so sequence 1, 2, 03 or 1, 02, 3 is invalid.

For example: Given a string like '131112', you can break it down into '13', '1', and '14', then '14' becomes '13' + '1', indicating a valid sequence. However, for an invalid example like '1023', you cannot split it in a way that matches the rules because '02' is not a valid number due to the leading zero.

Example 1:

Input: "112358"
Output: true
Explanation: The sequence is 1, 1, 2, 3, 5, 8. Each subsequent number is the sum of the two preceding numbers.
Example 2:

Input: "199100199"
Output: true
Explanation: The sequence is 1, 99, 100, 199. Next number is 199 which is sum of 100 and 99.
Although checking for various additive sequences might seem straightforward, it needs to be done efficiently because the string can be lengthy.

Constraints
The input string will only contain digits.

The length of the input string will be at least 3 characters long.

Submissions 72

Acceptance Rate 11.1%


Tags

Companies

Hint 1

Hint 2

Hint 3

Hint 4

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
  isAdditiveNumber(num) {
    // num: string representing a sequence of digits
    // Returns a boolean indicating if the number is an additive number
    return false;
  }
}
Test Cases
Submission Results
Input
"112358"

Expected Output
trueclass Solution {
  isAdditiveNumber(num) {
    const n = num.length;

    for (let i = 1; i <= Math.floor(n / 2); i++) {

      if (num[0] === '0' && i > 1) break;

      for (let j = i + 1; j < n; j++) {

        if (num[i] === '0' && j - i > 1) break;

        const A = BigInt(num.slice(0, i));
        const B = BigInt(num.slice(i, j));

        if (this.check(A, B, j, num)) return true;
      }
    }

    return false;
  }

  check(A, B, start, num) {
    const n = num.length;

    while (start < n) {
      const C = A + B;
      const Cstr = C.toString();

      if (!num.startsWith(Cstr, start)) return false;

      start += Cstr.length;
      A = B;
      B = C;
    }

    return true;
  }
}
