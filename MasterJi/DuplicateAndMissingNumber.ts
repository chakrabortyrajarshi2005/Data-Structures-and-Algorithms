class Solution {
  findDuplicateMissing(arr: number[]): number[] {
    const n: number = arr.length;
    const seen: boolean[] = new Array(n + 1).fill(false);

    let duplicate = -1;
    let missing = -1;

    for (let i = 0; i < n; i++) {
      const val = arr[i];

      if (seen[val]) {
        duplicate = val;
      } else {
        seen[val] = true;
      }
    }

    for (let v = 1; v <= n; v++) {
      if (!seen[v]) {
        missing = v;
        break;
      }
    }

    return [duplicate, missing];
  }
}
