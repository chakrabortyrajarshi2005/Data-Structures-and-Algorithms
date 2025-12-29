class Solution {
  fruitAllocation(fruits: number[], baskets: number[]): number {
    const n = baskets.length;
    const size = 1 << Math.ceil(Math.log2(n));
    const seg = new Array(2 * size).fill(0);

    for (let i = 0; i < n; i++) {
      seg[size + i] = baskets[i];
    }
    for (let i = size - 1; i > 0; i--) {
      seg[i] = Math.max(seg[2 * i], seg[2 * i + 1]);
    }

    const query = (x: number): number => {
      let idx = 1;
      if (seg[idx] < x) return -1;

      while (idx < size) {
        if (seg[2 * idx] >= x) idx = 2 * idx;
        else idx = 2 * idx + 1;
      }
      return idx - size;
    };

    const update = (i: number) => {
      let idx = size + i;
      seg[idx] = 0;
      while (idx > 1) {
        idx >>= 1;
        seg[idx] = Math.max(seg[2 * idx], seg[2 * idx + 1]);
      }
    };

    let unplaced = 0;

    for (const fruit of fruits) {
      const pos = query(fruit);
      if (pos === -1) {
        unplaced++;
      } else {
        update(pos);
      }
    }

    return unplaced;
  }
}
