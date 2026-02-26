Segment Check for Ones in Binary String
easy

Tags

Companies

Hints
Given a binary string s without leading zeros, determine if s contains at most one contiguous segment of ones. If the condition is satisfied, return true, otherwise return false.

Example 1:

Input: s = "1001"
Output: false
Explanation: The ones in the string do not form a contiguous segment.
Example 2:

Input: s = "110"
Output: true
Explanation: All the ones in the string are contiguous.
In this problem, a binary string is considered valid if there is at most one uninterrupted segment of '1's, with no '0's interrupting this segment. Your task is to verify this condition for any given binary string s.

Constraints
The length of the binary string s is between 1 and 100.

The string s does not contain leading zeros.

Submissions 141

Acceptance Rate 27.7%class Solution {
  isSingleSegment(s) {
    return !s.includes("01");
  }
}
