Relative Ranks
easy

Tags

Companies

Hints
You are given an integer array score of size n, where score[i] is the score of the ith athlete in a competition. All the scores are guaranteed to be unique.

The athletes are ranked based on their scores, with the highest score receiving the 1st place, the second highest receiving the 2nd place, and so on.

The ranks are assigned as follows:

The 1st place athlete receives a "Gold Medal".

The 2nd place athlete receives a "Silver Medal".

The 3rd place athlete receives a "Bronze Medal".

From the 4th place to the nth place, each athlete receives their respective placement number (i.e., the xth place athlete's rank is "x").

Return an array answer of size n where answer[i] is the rank of the ith athlete.

Example:

Input: score = [8, 1, 5, 3, 2]

Output: ["Gold Medal", "5", "Silver Medal", "Bronze Medal", "4"]

Explanation:

The athlete with the highest score 8 receives the "Gold Medal".

The athlete with the second highest score 5 receives the "Silver Medal".

The athlete with the third highest score 3 receives the "Bronze Medal".

The score of 2 ranks 4th, hence receives "4".

The lowest score 1 ranks 5th, hence receives "5".

Constraints
1 <= n <= 20000

score[i] is unique and within the range of [-10^6, 10^6]

Submissions 20



class Solution {
  findRelativeRanks(score: number[]): string[] {
    const n = score.length;
    const result = new Array(n);
    const indexed = score.map((s, i) => [s, i]);

    indexed.sort((a, b) => b[0] - a[0]);

    for (let rank = 0; rank < n; rank++) {
      const idx = indexed[rank][1];
      if (rank === 0) result[idx] = "Gold Medal";
      else if (rank === 1) result[idx] = "Silver Medal";
      else if (rank === 2) result[idx] = "Bronze Medal";
      else result[idx] = String(rank + 1);
    }

    return result;
  }
}


Acceptance Rate 30%
