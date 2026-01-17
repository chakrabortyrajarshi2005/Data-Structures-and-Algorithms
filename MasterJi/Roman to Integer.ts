Roman to Integer
Accepted
easy

Tags

Companies

Hints
Roman numerals use seven symbols, each with a fixed integer value:

SymbolValueI1V5X10L50C100D500M1000

Normally the symbols are written from largest to smallest, and their values are added together. However, in six specific situations a smaller value placed before a larger one indicates subtraction instead of addition:

I may precede V (5) or X (10) to represent 4 (IV) and 9 (IX).

X may precede L (50) or C (100) to represent 40 (XL) and 90 (XC).

C may precede D (500) or M (1000) to represent 400 (CD) and 900 (CM).

Given a string s that is a valid Roman numeral (guaranteed to represent a number between 1 and 3999), convert it to its integer value.

Example 1

Input: s = "III"
Output: 3
Explanation: III = 1 + 1 + 1 = 3
Example 2

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V = 5, III = 3 → 50 + 5 + 3 = 58
Example 3

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90, IV = 4 → 1000 + 900 + 90 + 4 = 1994
Constraints
1 <= s.length <= 15

s is a valid Roman numeral representing an integer between 1 and 3999 inclusiveclass Solution {
  romanToInt(s: string): number {
    const val: Record<string, number> = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };

    let ans = 0;

    for (let i = 0; i < s.length; i++) {
      const cur = val[s[i]];
      const next = i + 1 < s.length ? val[s[i + 1]] : 0;

      if (cur < next) ans -= cur;
      else ans += cur;
    }

    return ans;
  }
}
