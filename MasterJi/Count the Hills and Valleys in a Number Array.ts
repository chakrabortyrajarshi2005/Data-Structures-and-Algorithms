Count the Hills and Valleys in a Number Array
medium

Tags

Companies

Hints
You are given a 0-indexed integer array nums. An index i is part of a peak in nums if the nearest non-equal neighbors of i are smaller than nums[i]. Similarly, an index i is part of a trough in nums if the closest non-equal neighbors of i are larger than nums[i]. Consecutive indices i and j are part of the same peak or trough if nums[i] == nums[j].

Note that for an index to be part of a peak or trough, it must have a non-equal neighbor on both the left and right of the index.

Return the number of peaks and troughs in nums.

Example 1:

Input: nums = [3,5,2,2,7,6]
Output: 3
Explanation:
At index 0: There is no non-equal neighbor of 3 on the left, so index 0 is neither a peak nor a trough.
At index 1: The closest non-equal neighbors of 5 are 3 and 2. Since 5 > 3 and 5 > 2, index 1 is a peak.
At index 2: The closest non-equal neighbors of 2 are 5 and 7. Since 2 < 5 and 2 < 7, index 2 is a trough.
At index 3: The closest non-equal neighbors of 2 are 5 and 7. Since 2 < 5 and 2 < 7, index 3 is a trough, but note that it is part of the same trough as index 2.
At index 4: The closest non-equal neighbors of 7 are 2 and 6. Since 7 > 2 and 7 > 6, index 4 is a peak.
At index 5: There is no non-equal neighbor of 6 on the right, so index 5 is neither a peak nor a trough.
There are 3 peaks and troughs, so we return 3.
Example 2:

Input: nums = [7,7,4,4,3,2]
Output: 0
Explanation:
At indices 0 and 1: There are no non-equal neighbors of 7 on the left, so both indices are neither peaks nor troughs.
At indices 2 and 3: The closest non-equal neighbors of 4 are 7 and 3. Since 4 < 7 and 4 > 3, indices 2 and 3 are neither peaks nor troughs.
At index 4: The closest non-equal neighbors of 3 are 4 and 2. Since 3 < 4 and 3 > 2, index 4 is neither a peak nor a trough.
At index 5: There is no non-equal neighbor of 2 on the right, so index 5 is neither a peak nor a trough.
There are 0 peaks and troughs, so we return 0.
Constraints
3 <= nums.length <= 100

1 <= nums[i] <= 100
class Solution {
    countPeaksAndTroughs(nums: number[]): number {
        let count = 0;
        let prev = nums[0];

        for (let i = 1; i < nums.length - 1; i++) {
            if (nums[i] === prev) continue;

            let next = nums[i + 1];
            let j = i + 1;
            while (j < nums.length && nums[j] === nums[i]) {
                j++;
            }
            if (j < nums.length) next = nums[j];
            else break;

            if ((nums[i] > prev && nums[i] > next) || (nums[i] < prev && nums[i] < next)) {
                count++;
            }

            prev = nums[i];
            i = j - 1;
        }

        return count;
    }
}
