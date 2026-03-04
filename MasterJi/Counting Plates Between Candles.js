Counting Plates Between Candles
Accepted
medium

Tags

Companies

Hints
You have a long table on which plates and candles are arranged in a line. The arrangement is represented as a string s with characters '*' (for plates) and '|' (for candles). You are tasked with answering several queries about this arrangement.

Each query is defined by two indices from an array queries where queries[i] = [lefti, righti]. This specifies a substring s[lefti...righti] (inclusive). For each query, you need to determine how many plates are situated between the candles within this substring. A plate is considered "between candles" if there is at least one candle preceding it and at least one candle following it within the considered substring.

Example 1:

Input: s = "**|**|***|", queries = [[2,5],[5,9]]
Output: [2,3]
In the first query, there are two plates between the candles.

In the second query, the number of plates between the candles is three.

Example 2:

Input: s = "***|**|*****|**||**|*", queries = [[1,17],[4,5],[14,17],[5,11],[15,16]]
Output: [9,0,0,0,0]
For the first query, there are nine plates between candles.

The subsequent queries result in zero plates between candles.

For each query, compute how many plates are between candles and return the answers as an array, with each element corresponding to the result of a query.

Constraints
1 <= s.length <= 100

1 <= queries.length <= 100

0 <= lefti <= righti < s.length

s[i] is either '*' or '|'.

Submissions 4

Acceptance Rate 75%class Solution {
  countPlatesBetweenCandles(s, queries) {
    const n = s.length;
    const prefixSum = new Array(n + 1).fill(0);
    const leftCandle = new Array(n).fill(-1);
    const rightCandle = new Array(n).fill(-1);

    let lastCandle = -1;
    for (let i = 0; i < n; i++) {
      if (s[i] === '|') lastCandle = i;
      leftCandle[i] = lastCandle;
      prefixSum[i + 1] = prefixSum[i] + (s[i] === '*' ? 1 : 0);
    }

    lastCandle = -1;
    for (let i = n - 1; i >= 0; i--) {
      if (s[i] === '|') lastCandle = i;
      rightCandle[i] = lastCandle;
    }

    const result = [];
    for (const [left, right] of queries) {
      const i = rightCandle[left];
      const j = leftCandle[right];

      if (i !== -1 && j !== -1 && i < j) {
        result.push(prefixSum[j] - prefixSum[i]);
      } else {
        result.push(0);
      }
    }

    return result;
  }
}
