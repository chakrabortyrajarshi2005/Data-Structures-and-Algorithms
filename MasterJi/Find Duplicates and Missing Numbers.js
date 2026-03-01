Find Duplicates and Missing Numbers
Accepted
easy

Tags

Companies

Hints
You have a set of integers, which originally contains all the numbers from 1 to n. Unfortunately, due to an error, one of the numbers in the set got duplicated, resulting in a repetition of one number and the omission of another.

You are given an integer array nums representing the current state of this set after the error.

Your task is to find the number that occurs twice and the number that is missing, and return them in the form of an array.

Example 1:
Input: nums = [1,2,2,4]
Output: [2,3]
Explanation: In the original set, numbers should be [1,2,3,4]. However, "2" appears twice, and "3" is missing.
Example 2:
Input: nums = [1,1]
Output: [1,2]
Explanation: In the original set, numbers should be [1,2]. "1" appears twice, and "2" is missing.
Constraints
1 <= nums.length <= 10000

1 <= nums[i] <= n where n = nums.length

Submissions 102

Acceptance Rate 35.3%class Solution {
  findErrorNums(nums) {
    const n = nums.length;

    let sum = 0;
    let sqSum = 0;

    for (let num of nums) {
      sum += num;
      sqSum += num * num;
    }

    const expectedSum = (n * (n + 1)) / 2;
    const expectedSqSum = (n * (n + 1) * (2 * n + 1)) / 6;

    const diff = sum - expectedSum;              // D - M
    const sqDiff = sqSum - expectedSqSum;        // D² - M²

    const sumDM = sqDiff / diff;                 // D + M

    const duplicate = (diff + sumDM) / 2;
    const missing = sumDM - duplicate;

    return [duplicate, missing];
  }
}
