Check Isomorphic Codes
Accepted
medium

Tags

Companies

Hints
Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

Examples:

Example 1:

Input: s = "egg", t = "add"
Output: true
Explanation: The strings `s` and `t` can be made identical by:
- Mapping 'e' to 'a'.
- Mapping 'g' to 'd'.
Example 2:

Input: s = "foo", t = "bar"
Output: false
Explanation: The strings `s` and `t` cannot be made identical as 'o' needs to be mapped to both 'a' and 'r'.
Example 3:

Input: s = "paper", t = "title"
Output: true
Your task is to determine if a one-to-one character mapping between the two strings can transform the first string into the second.

Constraints
The lengths of the strings s and t must be equal.

Both s and t consist of printable ASCII charactersclass Solution {
  isIsomorphic(s, t) {
    if (s.length !== t.length) return false;

    const mapST = {};
    const mapTS = {};

    for (let i = 0; i < s.length; i++) {
      const charS = s[i];
      const charT = t[i];

      if (mapST[charS] && mapST[charS] !== charT) {
        return false;
      }

      if (mapTS[charT] && mapTS[charT] !== charS) {
        return false;
      }

      mapST[charS] = charT;
      mapTS[charT] = charS;
    }

    return true;
  }
}
