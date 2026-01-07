Find the Repeated Element
easy

Tags

Companies

Hints
You are given an integer array arr that satisfies the following conditions:

The length of arr equals 2 * n for some integer n.

There are exactly n + 1 distinct values in the array.

One of those values appears exactly n times, while every other value appears only once.

Your task is to identify and return the value that is repeated n times.

Example
Input: arr = [1, 2, 3, 3]
Output: 3
Explanation: The array length is 4, so n = 2. The value 3 occurs twice, which matches n.

Another Example
Input: arr = [2, 1, 2, 5, 3, 2]
Output: 2
Explanation: The array length is 6, hence n = 3. The value 2 appears three times.

Yet Another Example
Input: arr = [5, 1, 5, 2, 5, 3, 5, 4]
Output: 5
Explanation: The array length is 8, so n = 4. The value 5 occurs four times.

The input guarantees that such a repeated element always exists and is unique.

Constraints
arr.length is even and equals 2 * n for some integer n.

There are exactly n + 1 distinct values in arr.

One value appears exactly n times; all other values appear once.

1 ≤ n ≤ 10^5 (implied by typical input size limits).



  class Solution {
  findRepeatedElement(arr) {
    const seen = new Set();

    for (const num of arr) {
      if (seen.has(num)) {
        return num;
      }
      seen.add(num);
    }

    return -1;
  }
}


The repeated element is guaranteed to exist and be unique.
