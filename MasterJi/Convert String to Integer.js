Convert String to Integer
medium

Tags

Companies

Hints
Implement a function myAtoi(string s) to convert a given string into a 32-bit signed integer, following the rules outlined below:

Whitespace Handling: Disregard any initial whitespace characters at the beginning of the string.

Sign Determination: Identify the sign of the number by checking for a '+' or '-' sign following the whitespace. In absence of these signs, assume the number is positive.

Number Conversion: Process the characters following the potential sign until a non-digit character is encountered, or the end of the string is reached. Begin conversion by ignoring any leading zeros. If no digits are found, return 0.

Range Clamping: Ensure the resulting integer fits within the 32-bit signed integer range of [-2^31, 2^31 - 1]. Adjust values outside this range to fit within it:

Values exceeding 2,147,483,647 should be clamped to 2,147,483,647.

Values lower than -2,147,483,648 should be clamped to -2,147,483,648.

Return the Result: Output the calculated integer as the final result.

Constraints
1 <= s.length <= 200

s consists of English letters, digits, '+', '-', and whitespace characters.

Submissions 11

Acceptance Rate 63.6%


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
class Solution {
    myAtoi(s) {
        // s: string - the input string for conversion
        
        // Your implementation here
        return 0; // Return the converted integer or clamped value
    }
}
Test Cases
Submission Results
Input
"words and 987"

Expected Output
0class Solution {
    myAtoi(s) {
        let i = 0;
        let sign = 1;
        let res = 0;
        const INT_MAX = 2147483647;
        const INT_MIN = -2147483648;

        while (i < s.length && s[i] === ' ') {
            i++;
        }

        if (i < s.length && (s[i] === '+' || s[i] === '-')) {
            sign = s[i] === '-' ? -1 : 1;
            i++;
        }

        while (i < s.length && s[i] >= '0' && s[i] <= '9') {
            res = res * 10 + (s[i] - '0');

            if (sign === 1 && res > INT_MAX) return INT_MAX;
            if (sign === -1 && res * sign < INT_MIN) return INT_MIN;

            i++;
        }

        return res * sign;
    }
}
