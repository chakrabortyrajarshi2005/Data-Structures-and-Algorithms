class Solution {
  maxEvenNumber(s: string): string {
    let lastTwo = -1;

    for (let i = s.length - 1; i >= 0; i--) {
      if (s[i] === '2') {
        lastTwo = i;
        break;
      }
    }

    if (lastTwo === -1) return "";

    let res = "";
    for (let i = 0; i <= lastTwo; i++) {
      if (s[i] === '2' || s[i] === '1') {
        res += s[i];
      }
    }

    return res;
  }
}
