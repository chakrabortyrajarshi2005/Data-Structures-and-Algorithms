Merge Two Sorted Lists
Accepted
medium

Tags

Companies

Hints
You are given two integer arrays arr1 and arr2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in arr1 and arr2 respectively.

Merge arr1 and arr2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array arr1. To accommodate this, arr1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. arr2 has a length of n.

Example 1:
Input: arr1 = [1,2,3,0,0,0], m = 3, arr2 = [2,5,6], n = 3
Output: arr1 = [1,2,2,3,5,6]
Explanation: The function should merge arrays such that final sorted array becomes [1,2,2,3,5,6]
Example 2:
Input: arr1 = [1], m = 1, arr2 = [], n = 0
Output: arr1 = [1]
Explanation: Since arr2 is empty, arr1 remains as [1].
Example 3:
Input: arr1 = [0], m = 0, arr2 = [1], n = 1
Output: arr1 = [1]
Explanation: Initially all elements of arr1 are 0, hence after merging arr1 becomes [1].
Constraints
1 <= m, n <= 200

0 <= arr1[i], arr2[j] <= 10^4

arr1.length == m + n

Submissions 125

Acceptance Rate 32%class Solution {
  merge(arr1: number[], m: number, arr2: number[], n: number): void {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    while (i >= 0 && j >= 0) {
      if (arr1[i] > arr2[j]) {
        arr1[k] = arr1[i];
        i--;
      } else {
        arr1[k] = arr2[j];
        j--;
      }
      k--;
    }

    // If arr2 still has elements
    while (j >= 0) {
      arr1[k] = arr2[j];
      j--;
      k--;
    }
  }
}
