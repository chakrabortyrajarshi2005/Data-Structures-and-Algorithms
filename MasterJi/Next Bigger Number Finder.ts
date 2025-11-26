Next Bigger Number Finder
Accepted
easy

Tags

Companies

Hints
Given a positive integer n, the task is to find the smallest integer which has exactly the same digits as the integer n and is greater in value than n. If no such positive integer exists, return -1.

You must ensure that the returned integer fits within a 32-bit integer. If there is a valid answer but it doesn't fit in a 32-bit integer, return -1.

To understand the problem better, consider the following example:

Example:

Input: n = 1234
Output: 1243
Explanation: By rearranging the digits, 1243 is the next integer greater than 1234 using the digits of 1234.
Another Example:

Input: n = 4321
Output: -1
Explanation: Since 4321 is the largest arrangement of these digits, there is no number larger than 4321 that can be formed.
Note how you aim to find that next permutation or arrangement of the digits in the number that results in a larger number, but must also check whether a solution exists within the 32-bit integer limit. If no such rearrangement is possible, or if the rearranged number exceeds the 32-bit integer limit, return -1.

Constraints
n is a positive integer in the range of 1 to 2^31 - 1.
class Solution {
    nextBiggerNumber(n: number): number {
        const digits: number[] = n.toString().split("").map(Number);
        const len = digits.length;

        let i = len - 2;
        while (i >= 0 && digits[i] >= digits[i + 1]) i--;
        if (i < 0) return -1;

        let j = len - 1;
        while (j > i && digits[j] <= digits[i]) j--;

        [digits[i], digits[j]] = [digits[j], digits[i]];
        this.reverse(digits, i + 1, len - 1);

        let val = 0;
        for (const d of digits) {
            val = val * 10 + d;
            if (val > 2147483647) return -1;
        }
        return val;
    }

    private reverse(arr: number[], left: number, right: number): void {
        while (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }
}
