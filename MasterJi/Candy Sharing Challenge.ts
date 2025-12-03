Candy Sharing Challenge
Given two integers, dividend and divisor, your task is to divide these two integers without using the multiplication, division, or modulus operators.

The division should truncate towards zero, meaning any fractional part should be discarded. For instance, a result of 8.345 should be truncated to 8, and a result of -2.7335 should be truncated to -2.

You need to return the quotient obtained after dividing dividend by divisor.

It is important to note that the environment assumes integers are stored within the 32-bit signed integer range: [−2^{31}, 2^{31} − 1]. Therefore, if the resulting quotient is greater than 2^{31} - 1, return 2^{31} - 1, and if it is less than -2^{31}, return -2^{31}.

Example 1:
Input: dividend = 10, divisor = 3
Output: 3
Explanation: 10 divided by 3 gives 3.33333.. which is truncated to 3.
Example 2:
Input: dividend = 7, divisor = -3
Output: -2
Explanation: 7 divided by -3 gives -2.33333.. which is truncated to -2.
Remember to handle edge cases, such as when the divisor is negative, and be mindful of the 32-bit integer boundaries when returning the result.

Constraints
-2^31 <= dividend <= 2^31 - 1

1 <= divisor <= 2^31 - 1



class Solution {
  divide(dividend: number, divisor: number): number {
    const INT_MAX = 2 ** 31 - 1; 
    const INT_MIN = -(2 ** 31);  
    if (dividend === INT_MIN && divisor === -1) {
      return INT_MAX;
    }

    const negative = (dividend < 0) !== (divisor < 0);

    let dvd = Math.abs(dividend);
    let dvs = Math.abs(divisor);

    let result = 0;

    while (dvd >= dvs) {
      let temp = dvs;
      let multiple = 1;

      while (temp + temp <= dvd) {
        temp += temp;  
        multiple += multiple; 
      }

      dvd -= temp;
      result += multiple;
    }

    return negative ? -
