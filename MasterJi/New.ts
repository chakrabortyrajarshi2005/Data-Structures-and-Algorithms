class Solution {
  greatestCommonDivisor(nums: number[]): number {
    const minVal = Math.min(...nums);
    const maxVal = Math.max(...nums);

    const gcd = (a: number, b: number): number => {
      while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
      }
      return a;
    };

    return gcd(minVal, maxVal);
  }
}
