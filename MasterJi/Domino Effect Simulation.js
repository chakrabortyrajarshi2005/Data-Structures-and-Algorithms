Domino Effect Simulation
Accepted
medium

Tags

Companies

Hints
There are n dominoes placed in a line, standing vertically upright. Initially, some of the dominoes are pushed either to the left or to the right simultaneously. When a domino is pushed to the left (L), it will push the adjacent domino to the left at each subsequent second. Conversely, when pushed to the right (R), it will influence the adjacent domino to its right. Should a domino be pushed simultaneously from both directions, it will remain upright due to opposing forces canceling each other out.

In this problem, the objective is to determine the final state of the dominoes after all possible movements. You will be provided with a string dominoes which describes the initial state where:

dominoes[i] = 'L' indicates the ith domino is pushed to the left.

dominoes[i] = 'R' signifies the ith domino is pushed to the right.

dominoes[i] = '.' represents a domino that is standing upright and has not been pushed.

Your task is to return a string that represents the final state of the dominoes.

Example 1:
Input: dominoes = "RR.L"
Output: "RR.L"
Explanation: The first domino expends no additional force on the second domino.
Example 2:
Input: dominoes = ".L.R...LR..L.."
Output: "LL.RR.LLRRLL.."
Each domino interaction should be calculated to ensure the resulting positions abide by the described rules of collision and movement. The challenge lies in simulating these sequential interactions to predict and return the final layout of the dominoes.

Constraints
1 <= n <= 10000

dominoes is a string consisting of characters 'L', 'R', and '.'

Submissions 6

Acceptance Rate 0%class Solution {
  simulateDominoes(dominoes) {
    const s = "L" + dominoes + "R";
    const arr = s.split("");
    let i = 0;

    for (let j = 1; j < arr.length; j++) {
      if (arr[j] === ".") continue;

      if (j - i > 1) {
        if (arr[i] === arr[j]) {
          for (let k = i + 1; k < j; k++) arr[k] = arr[i];
        } else if (arr[i] === "R" && arr[j] === "L") {
          let l = i + 1, r = j - 1;
          while (l < r) {
            arr[l++] = "R";
            arr[r--] = "L";
          }
        }
      }
      i = j;
    }

    return arr.slice(1, -1).join("");
  }
}
