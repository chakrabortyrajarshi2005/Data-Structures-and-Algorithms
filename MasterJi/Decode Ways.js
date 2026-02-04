Decode Ways
Accepted
medium

Tags

Companies

Hints
You are given a string s that consists only of digits. Each digit or pair of digits can be mapped to a letter according to the following table:

"1" -> 'A'
"2" -> 'B'
...
"25" -> 'Y'
"26" -> 'Z'
A valid decoding is a way to split the entire string into substrings where each substring is either a single digit from 1 to 9 or a two‑digit number from 10 to 26. Leading zeros are not allowed — the substring "0" is never valid, and a two‑digit block cannot start with zero (e.g., "06" is invalid, while "10" and "20" are valid).

Your task is to determine how many different ways the string can be decoded. If there is no possible decoding, return 0. The answer is guaranteed to fit in a 32‑bit signed integer.

Example 1

Input: s = "12"
Output: 2
Explanation: The string can be decoded as "AB" (1 2) or as "L" (12).
Example 2

Input: s = "226"
Output: 3
Explanation: Possible decodings are "BZ" (2 26), "VF" (22 6) and "BBF" (2 2 6).
Example 3

Input: s = "06"
Output: 0
Explanation: "06" is not a valid encoding because a block cannot start with a leading zero.
Example 4

Input: s = "11106"
Output: 2
Explanation: The two valid decodings are:
- "AAJF" with the grouping (1, 1, 10, 6)
- "KJF" with the grouping (11, 10, 6)
The grouping (1, 11, 06) is invalid because "06" is not allowed.
Count all possible ways to split the string such that each piece corresponds to a valid letter mapping.

Constraints
1 <= s.length <= 100

s consists only of digit characters ('0'‑'9')

The result fits in a 32‑bit signed integer

Submissions 12

Acceptance Rate 41.7%class Solution {
  /**
   * Count the number of ways to decode the given digit string.
   * @param {string} s - The input string consisting only of digits.
   * @returns {number} The total number of valid decodings (0 if none).
   */
  numDecodings(s) {
    if (!s || s[0] === "0") return 0;

    const n = s.length;
    const dp = new Array(n + 1).fill(0);

    dp[0] = 1;
    dp[1] = 1;

    for (let i = 2; i <= n; i++) {
      const oneDigit = s[i - 1];
      const twoDigits = s.substring(i - 2, i);

      if (oneDigit !== "0") {
        dp[i] += dp[i - 1];
      }

      if (twoDigits >= "10" && twoDigits <= "26") {
        dp[i] += dp[i - 2];
      }
    }

    return dp[n];
  }
}
