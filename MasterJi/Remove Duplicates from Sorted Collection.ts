Remove Duplicates from Sorted Collection
Accepted
easy

Tags

Companies

Hints
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

Imagine you have a collection of numbered cards arranged neatly in a line. Each number represents a unique value, and all the cards with the same number are grouped together because they are sorted. Your task is to find a way to keep only one card of each number and remove the rest, while maintaining the order of numbers. In the end, count how many different numbers you retained in your collection.

Your objective is to modify the array directly to achieve this without creating a new array. At the end of the process, return the number of unique numbers left in the array.

Constraints
1 <= nums.length <= 10^4

-10^4 <= nums[i] <= 10^4

nums is sorted in non-decreasing order.class Solution {
    removeDuplicates(nums: number[]): number {
       let i = 0;  

        for (let j = 1; j < nums.length; j++) { 
            if (nums[j] != nums[i]) {
                i++;
                nums[i] = nums[j];
            }
        }

        return i + 1;
    }
}
