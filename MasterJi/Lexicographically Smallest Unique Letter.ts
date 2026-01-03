Lexicographically Smallest Unique Letter
Accepted
medium

Tags

Companies

Hints
Given a string s, remove duplicate letters so that every letter appears once and only once. You must make sure your result is the smallest in lexicographical order among all possible results.

Example 1:

Input: s = "bcabc"
Output: "abc"
Example 2:

Input: s = "cbacdcbc"
Output: "acdb"
Constraints:

1 <= s.length <= 104

s consists of lowercase English letters.

Constraints
1 <= s.length <= 10^4

s consists of lowercase English letters.class Solution {
  removeDuplicateLetters(s: string): string {
    const lastIndex: Record<string, number> = {};
    const stack: string[] = [];
    const seen = new Set<string>();

    for (let i = 0; i < s.length; i++) {
      lastIndex[s[i]] = i;
    }

    for (let i = 0; i < s.length; i++) {
      const ch = s[i];

      if (seen.has(ch)) continue;

      while (
        stack.length > 0 &&
        ch < stack[stack.length - 1] &&
        lastIndex[stack[stack.length - 1]] > i
      ) {
        seen.delete(stack.pop()!);
      }

      stack.push(ch);
      seen.add(ch);
    }

    return stack.join("");
  }
}
