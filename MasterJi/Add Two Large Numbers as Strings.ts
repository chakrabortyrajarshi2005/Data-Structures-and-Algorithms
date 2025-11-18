Add Two Large Numbers as Strings
Accepted
easy

Tags

Companies

Hints
Problem Title: Add Strings
Problem Description:
Given two non-negative integers, num1 and num2 represented as strings, return the sum of num1 and num2 as a string.

You must solve the problem without using any built-in library for handling large integers. Also, you must not directly convert the inputs to integers.

Example 1:
Input: num1 = "23", num2 = "74"

Output: "97"

Example 2:
Input: num1 = "456", num2 = "77"

Output: "533"

Example 3:
Input: num1 = "0", num2 = "0"

Output: "0"

Constraints:
1 <= num1.length, num2.length <= 10^4

num1 and num2 consist of only digits.

num1 and num2 do not have any leading zeros except for the zero itself.

Custom Instructions:
This is an EASY problem.

To solve this problem, treat the string representations of the numbers as sequences of characters. Start adding from the rightmost character to the leftmost, while taking care of the carry that results from adding two digits that sum to more than 9. The objective is to perform the addition as you would manually on paper. Avoid using direct conversions of the whole string to integer values.

Constraints
1 <= num1.length, num2.length <= 10^4

num1 and num2 consist of only digits.

num1 and num2 do not have any leading zeros except for the zero itself.class Solution {
  addStrings(num1: string, num2: string): string {
    let i = num1.length - 1;
    let j = num2.length - 1;
    let carry = 0;
    let result = "";

    while (i >= 0 || j >= 0 || carry > 0) {
      let digit1 = i >= 0 ? num1.charCodeAt(i) - '0'.charCodeAt(0) : 0;
      let digit2 = j >= 0 ? num2.charCodeAt(j) - '0'.charCodeAt(0) : 0;

      let sum = digit1 + digit2 + carry;
      result = (sum % 10).toString() + result;
      carry = Math.floor(sum / 10);

      i--;
      j--;
    }

    return result;
  }
}
