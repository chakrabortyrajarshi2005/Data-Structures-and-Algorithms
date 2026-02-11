Magical Pattern Matching
hard

Tags

Companies

Hints
Implement regular expression matching with support for . and *.

Given a string s and a pattern p, return true if s matches the pattern p, else return false. The matching should cover the entire input string (not partial).

Rules:

. Matches any single character.

* Matches zero or more of the preceding element.

Input:

A string s consisting of lowercase letters.

A string p consisting of lowercase letters, . and *.

Output:

A boolean indicating whether s matches p.

Example 1:

Input: s = "aa", p = "a*"
Output: true
Explanation: "*" means zero or more of the preceding element, "a". Therefore, by repeating "a" once, it becomes "aa", which matches the original string "aa".
Example 2:

Input: s = "ab", p = ".*"
Output: true
Explanation: ".*" means "zero or more (*) of any character (.)".
Example 3:

Input: s = "aab", p = "c*a*b"
Output: true
Explanation: c can be repeated 0 times, a can be repeated 1 time. Therefore, it matches "aab".
Constraints
The input string s consists of lowercase letters only.

The input pattern p consists of lowercase letters, . and *.

The pattern contains valid combinations of . and * (e.g., no consecutive * and no * as the first character).

Full string match is required, meaning s must match p completely.class Solution {
    isMatch(s, p) {
        const m = s.length;
        const n = p.length;
        const dp = Array.from({ length: m + 1 }, () =>
            Array(n + 1).fill(false)
        );

        dp[0][0] = true;

        for (let j = 2; j <= n; j++) {
            if (p[j - 1] === '*') {
                dp[0][j] = dp[0][j - 2];
            }
        }

        for (let i = 1; i <= m; i++) {
            for (let j = 1; j <= n; j++) {

                if (p[j - 1] === '.' || p[j - 1] === s[i - 1]) {
                    dp[i][j] = dp[i - 1][j - 1];
                }

                else if (p[j - 1] === '*') {
                    dp[i][j] = dp[i][j - 2];

                    if (p[j - 2] === '.' || p[j - 2] === s[i - 1]) {
                        dp[i][j] = dp[i][j] || dp[i - 1][j];
                    }
                }
            }
        }

        return dp[m][n];
    }
}
