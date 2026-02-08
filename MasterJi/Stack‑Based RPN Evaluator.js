Stack‑Based RPN Evaluator
Accepted
medium

Tags

Companies

Hints
You are given an array of strings symbols that encodes an arithmetic expression in Reverse Polish Notation (RPN).

Your task is to evaluate this expression and return the resulting integer.

Rules

Valid operators are +, -, *, and /.

Each operand may be an integer (positive, negative, or zero) or the result of another sub‑expression.

Division between two integers truncates toward zero (for example, 7 / -3 yields -2).

No division by zero will occur.

The input is guaranteed to represent a valid RPN expression, and all intermediate results fit in a 32‑bit signed integer.

How it works

Scan the symbols from left to right.

Keep a stack (think of it as a pile of plates). Whenever you encounter a number, push it onto the stack.

When you encounter an operator, pop the top two numbers from the stack, apply the operator (second pop operator first pop), and push the result back onto the stack.

After processing all symbols, the stack will contain a single value – the value of the whole expression.

Examples

Input: symbols = ["2", "1", "+", "3", "*" ]
Output: 9
Explanation: ((2 + 1) * 3) = 9
Input: symbols = ["4", "13", "5", "/", "+" ]
Output: 6
Explanation: (4 + (13 / 5)) = 6
Input: symbols = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+" ]
Output: 22
Explanation:
((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22
Constraints
1 <= symbols.length <= 10^4

Each element of symbols is either one of the operators +, -, *, / or a string representation of a 32‑bit signed integer.

The given RPN expression is guaranteed to be valid and will not cause division by zero.

All intermediate and final results fit within the 32‑bit signed integer range.

Submissions 67

Acceptance Rate 26.9%class Solution {
  /**
   * Evaluates an arithmetic expression given in Reverse Polish Notation.
   * @param {string[]} symbols - Array of tokens (operands or operators).
   * @returns {number} The integer result of the expression.
   */
  evalRpn(symbols) {
    const stack = [];

    for (let token of symbols) {
      if (["+", "-", "*", "/"].includes(token)) {
        const b = stack.pop();
        const a = stack.pop();

        let result;
        switch (token) {
          case "+":
            result = a + b;
            break;

          case "-":
            result = a - b;
            break;

          case "*":
            result = a * b;
            break;

          case "/":
            // Truncate toward zero
            result = Math.trunc(a / b);
            break;
        }

        stack.push(result);
      } else {
        // Convert string number to integer
        stack.push(parseInt(token, 10));
      }
    }

    return stack.pop();
  }
}
