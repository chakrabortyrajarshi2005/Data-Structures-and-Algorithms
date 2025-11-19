Sum of Two Binary Strings
Accepted
easy

Tags

Companies

Hints
Given two binary strings a and b, return their sum as a binary string.

Example 1:
Input: a = "11", b = "1"
Output: "100"
Example 2:
Input: a = "1010", b = "1011"
Output: "10101"
Constraints:
1 <= a.length, b.length <= 10^4

a and b consist only of '0' or '1' characters.

Each string does not contain leading zeros except for the zero itself.

Please note that this is an EASY difficulty problem.

Constraints
1 <= a.length, b.length <= 10^4

a and b consist only of '0' or '1' characters.

Each string does not contain leading zeros except for the zero itself.class Solution {
  addBinary(a: string, b: string): string {
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    let result = "";

    while (i >= 0 || j >= 0 || carry > 0) {
      let bitA = i >= 0 ? a.charCodeAt(i) - 48 : 0;
      let bitB = j >= 0 ? b.charCodeAt(j) - 48 : 0;

      let sum = bitA + bitB + carry;
      result = (sum % 2) + result;
      carry = Math.floor(sum / 2);

      i--;
      j--;
    }

    return result;
  }
}
