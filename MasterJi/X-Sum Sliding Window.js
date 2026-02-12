vX-Sum Sliding Window
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

Submissions 15

Acceptance Rate 40%class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @param {number} x
   * @return {number[]}
   */
  xSumSlidingWindow(nums, k, x) {
    const n = nums.length;
    const freq = new Map();
    const result = [];

    const compare = (a, b) => {
      if (a[1] === b[1]) return b[0] - a[0];
      return b[1] - a[1];
    };

    const getXSum = () => {
      const arr = [];
      for (const [num, count] of freq.entries()) {
        arr.push([num, count]);
      }
      arr.sort(compare);
      let total = 0;
      let remaining = x;
      for (let i = 0; i < arr.length && remaining > 0; i++) {
        const [num, count] = arr[i];
        const take = Math.min(count, count);
        total += num * take;
        remaining--;
      }
      if (arr.length < x) {
        total = 0;
        for (const [num, count] of arr) {
          total += num * count;
        }
      }
      return total;
    };

    for (let i = 0; i < k; i++) {
      freq.set(nums[i], (freq.get(nums[i]) || 0) + 1);
    }

    result.push(getXSum());

    for (let i = k; i < n; i++) {
      const left = nums[i - k];
      freq.set(left, freq.get(left) - 1);
      if (freq.get(left) === 0) freq.delete(left);

      freq.set(nums[i], (freq.get(nums[i]) || 0) + 1);

      result.push(getXSum());
    }

    return result;
  }
}
