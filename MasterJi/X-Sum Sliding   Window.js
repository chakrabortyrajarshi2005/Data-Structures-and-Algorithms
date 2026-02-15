X-Sum Sliding Window
Accepted
hard

Tags

Companies

Hints
You are given an array of integers nums and two integers k and x.

The x-sum of an array is calculated by the following procedure:

Count the occurrences of all elements in the array.

Keep only the elements that are among the top x most frequent. If two elements have the same number of occurrences, the element with the bigger value is considered more frequent.

Calculate the sum of the resulting array.

Note that if the array has less than x distinct elements, then the x-sum is the sum of the entire array.

Return an integer array answer of length n - k + 1 where answer[i] is the x-sum of the subarray nums[i..i + k - 1].

Example 1:

Input: nums = [1, 1, 2, 3, 3, 4], k = 3, x = 2
Output: [4, 5, 8, 10]
Explanation:
  For subarray [1, 1, 2], the top 2 most frequent elements are 1 (frequency 2) and 2 (frequency 1). The sum is 1 + 1 + 2 = 4.
  For subarray [1, 2, 3], all elements have frequency 1. The top 2 most frequent elements are 3 and 2 (since 3 > 2 > 1). The sum is 2 + 3 = 5.
  For subarray [2, 3, 3], the top 2 most frequent elements are 3 (frequency 2) and 2 (frequency 1). The sum is 2 + 3 + 3 = 8.
  For subarray [3, 3, 4], the top 2 most frequent elements are 3 (frequency 2) and 4 (frequency 1). The sum is 3 + 3 + 4 = 10.
Example 2:

Input: nums = [15, 25, 15, 25, 35], k = 2, x = 2
Output: [40, 40, 40, 60]
Explanation:
  Since k equals x, for each subarray of length 2, the x-sum is the sum of the entire subarray.
  The subarrays are [15,25], [25,15], [15,25], [25,35] and their sums are 40, 40, 40, 60 respectively.
Constraints
1 <= nums.length <= 10^5

1 <= k <= nums.length

1 <= x <= 10^5

-10^9 <= nums[i] <= 10^9

Submissions 46

Acceptance Rate 39.1%class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @param {number} x
   * @return {number[]}
   */
  xSumSlidingWindow(nums, k, x) {
    const n = nums.length;
    const freq = new Map();
    const cmp = (a, b) => {
      if (a[1] !== b[1]) return b[1] - a[1];
      return b[0] - a[0];
    };

    const result = [];

    for (let i = 0; i <= n - k; i++) {
      if (i === 0) {
        for (let j = 0; j < k; j++) {
          freq.set(nums[j], (freq.get(nums[j]) || 0) + 1);
        }
      } else {
        const out = nums[i - 1];
        freq.set(out, freq.get(out) - 1);
        if (freq.get(out) === 0) freq.delete(out);

        const inn = nums[i + k - 1];
        freq.set(inn, (freq.get(inn) || 0) + 1);
      }

      const arr = [...freq.entries()].sort(cmp);

      let need = x;
      let sum = 0;

      for (const [val, count] of arr) {
        if (need === 0) break;

        sum += val * count;
        need--;
      }

      result.push(sum);
    }

    return result;
  }
}
class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @param {number} x
   * @return {number[]}
   */
  xSumSlidingWindow(nums, k, x) {
    const n = nums.length;
    const freq = new Map();
    const cmp = (a, b) => {
      if (a[1] !== b[1]) return b[1] - a[1];
      return b[0] - a[0];
    };

    const result = [];

    for (let i = 0; i <= n - k; i++) {
      if (i === 0) {
        for (let j = 0; j < k; j++) {
          freq.set(nums[j], (freq.get(nums[j]) || 0) + 1);
        }
      } else {
        const out = nums[i - 1];
        freq.set(out, freq.get(out) - 1);
        if (freq.get(out) === 0) freq.delete(out);

        const inn = nums[i + k - 1];
        freq.set(inn, (freq.get(inn) || 0) + 1);
      }

      const arr = [...freq.entries()].sort(cmp);

      let need = x;
      let sum = 0;

      for (const [val, count] of arr) {
        if (need === 0) break;

        sum += val * count;
        need--;
      }

      result.push(sum);
    }

    return result;
  }
}
