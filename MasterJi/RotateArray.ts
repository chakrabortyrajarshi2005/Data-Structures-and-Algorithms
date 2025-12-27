class Solution {
    rotateArray(nums: number[], k: number): number[] {
        const n = nums.length
        k %= n

        const reverse = (l: number, r: number) => {
            while (l < r) {
                ;[nums[l], nums[r]] = [nums[r], nums[l]]
                l++
                r--
            }
        }

        reverse(0, n - 1)
        reverse(0, k - 1)
        reverse(k, n - 1)

        return nums
    }
}
