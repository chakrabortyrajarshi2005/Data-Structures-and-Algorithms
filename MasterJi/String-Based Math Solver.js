String-Based Math Solver
Accepted
hard

Tags

Companies

Hints
Given a string s representing a valid expression, implement a basic calculator to evaluate it and return the result of the evaluation.

You are tasked with creating a tool to calculate the result of expressions provided as strings. These expressions will include numbers, the plus (+) operator, and the minus (-) operator. It's important to note that the expressions can have spaces between numbers and operators, like " 3 + 7 - 4 ".

Develop a solution to parse and process these strings, correctly evaluating the arithmetic operations without utilizing any built-in functions that automatically compute results of strings as expressions.

Example 1:

Input: s = "2 + 5 - 3"
Output: 4
Explanation: The expression evaluates to 2 + 5 - 3 = 4.
Example 2:

Input: s = "10 - 2 + 7 "
Output: 15
Explanation: The expression evaluates to 10 - 2 + 7 = 15.
Constraints
The expression will contain only non-negative integers, the operators '+' and '-', and spaces between them.

The expression will be a valid string representation of an arithmetic operation with no invalid characters or formats.

Submissions 46

Acceptance Rate 65.2%class Solution {
  solveExpression(s) {
    let total = 0;
    let currentNumber = 0;
    let sign = 1; 

    for (let i = 0; i < s.length; i++) {
      let char = s[i];

      if (char >= '0' && char <= '9') {
        currentNumber = currentNumber * 10 + (char - '0');
      } 
      else if (char === '+' || char === '-') {
        total += sign * currentNumber;
        currentNumber = 0;
        sign = (char === '+') ? 1 : -1;
      }
    }

    return total + (sign * currentNumber);
  }
}
