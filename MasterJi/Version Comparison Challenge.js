Version Comparison Challenge
medium

Tags

Companies

Hints
Given two version strings, version1 and version2, compare them. A version string consists of revisions separated by dots '.'. The value of the revision is its integer conversion while ignoring leading zeros.

To compare version strings, compare their revision values from left to right. If one of the version strings has fewer revisions, treat the missing revision values as 0.

Return the following:

If version1 < version2, return -1.

If version1 > version2, return 1.

Otherwise, return 0.

Example 1:

Input: version1 = "1.01", version2 = "1.001"
Output: 0
Explanation: Ignoring leading zeros, "01" and "001" are both "1".
Example 2:

Input: version1 = "1.0", version2 = "1.0.0"
Output: 0
Explanation: version1 does not have a third level revision, which implies "0".
Example 3:

Input: version1 = "0.1", version2 = "1.1"
Output: -1
Explanation: 0 < 1, thus version1 < version2.
Example 4:

Input: version1 = "1.0.1", version2 = "1"
Output: 1
Explanation: version1 has an additional third-level revision.
Example 5:

Input: version1 = "7.5.2.4", version2 = "7.5.3"
Output: -1
Explanation: The third level revision "2" is less than "3".
Constraints
1 <= length of version1, version2 <= 15

version1 and version2 are valid version strings containing only digits and dots.

Submissions 33

Acceptance Rate 36.4%


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
8
9
class Solution {
  compareVersion(version1, version2) {
    // version1: string representing the first version
    // version2: string representing the second version
    
    // Your implementation here
    return 0;
  }
}
Test Cases
Submission Results
Input
{"version1":"1.0.1","version2":"1"}

Expected Output
1class Solution {
  compareVersion(version1, version2) {
    const v1 = version1.split('.');
    const v2 = version2.split('.');
    const maxLength = Math.max(v1.length, v2.length);

    for (let i = 0; i < maxLength; i++) {
      const num1 = i < v1.length ? parseInt(v1[i]) : 0;
      const num2 = i < v2.length ? parseInt(v2[i]) : 0;

      if (num1 < num2) return -1;
      if (num1 > num2) return 1;
    }

    return 0;
  }
}
