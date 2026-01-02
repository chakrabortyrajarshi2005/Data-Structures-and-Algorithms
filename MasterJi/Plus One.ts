Plus One
Accepted
easy

Tags

Companies

Hints
You are given a non‑empty array digits where each element represents a single digit of a large non‑negative integer. The digits are stored from the most significant (leftmost) to the least significant (rightmost) position, and the number does not contain any leading zeroes.

Your task is to increase this integer by one and return the new value as an array of its digits.

How it works

Start from the rightmost digit (the units place) and add one.

If a digit becomes 10, write 0 in that position and carry 1 to the next digit on the left.

Continue moving leftwards, propagating the carry as needed.

If a carry remains after processing the most significant digit, prepend a 1 to the front of the array.

Example scenarios

Input:  digits = [1, 2, 3]
Output: [1, 2, 4]
Explanation: The array stands for the number 123. Adding one yields 124, which is represented as [1, 2, 4].
Input:  digits = [4, 3, 2, 1]
Output: [4, 3, 2, 2]
Explanation: The array represents 4321. After incrementing, we obtain 4322 → [4, 3, 2, 2].
Input:  digits = [9]
Output: [1, 0]
Explanation: 9 plus one becomes 10, so the resulting digit list is [1, 0].
The result should be the minimal array of digits that correctly reflects the original number increased by one.

Constraints
1 <= digits.length <= 10^4

0 <= digits[i] <= 9

The array represents a non‑negative integer without leading zeros (except the number 0 itself).class Solution {
  plusOne(digits: number[]): number[] {
    for (let i = digits.length - 1; i >= 0; i--) {
      if (digits[i] < 9) {
        digits[i]++;
        return digits;
      }
      digits[i] = 0;
    }
    return [1, ...digits];
  }
}
