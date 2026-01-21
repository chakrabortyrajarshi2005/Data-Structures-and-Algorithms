class Solution {
  findMissingToy(nums: number[]): number {
    const n = nums.length;
    let expected = (n * (n + 1)) / 2;
    let actual = 0;

    for (const num of nums) {
      actual += num;
    }

    return expected - actual;
  }
}
