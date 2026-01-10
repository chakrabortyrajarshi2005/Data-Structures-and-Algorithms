Find the Winning Player in the Coin Game
Accepted
easy

Tags

Companies

Hints
You are given two positive integers x and y. They represent the number of coins of value 75 and 10 respectively.

Two players, Hitesh and Piyush, take turns picking coins, with Hitesh making the first move. In a turn a player must select some of the remaining coins such that their total value is exactly 115. The player who cannot make such a selection on his turn loses the game.

Assuming both players play optimally, determine which player will win.

Example 1

Input: x = 2, y = 7
Output: "Hitesh"
Explanation: Hitesh can take one 75‑value coin and four 10‑value coins (75 + 4·10 = 115). No coins remain, so Piyush has no valid move and loses.
Example 2

Input: x = 4, y = 11
Output: "Piyush"
Explanation: Hitesh takes one 75‑value coin and four 10‑value coins, leaving 3 coins of value 75 and 7 coins of value 10. Piyush can also make a move (one 75‑value coin and four 10‑value coins), after which Hitesh has no legal move left and loses.
Constraints
0 \le x, y \le 10^9

Number of test cases \le 10^5class Solution {
  /**
   * Determines the winner of the Coin Sum Duel game.
   * @param {number} x - Number of coins with value 75.
   * @param {number} y - Number of coins with value 10.
   * @returns {string} - "Hitesh" if Hitesh wins, otherwise "Piyush".
   */
  coinSumDuel(x, y) {
    // Your implementation here
    const moves = Math.min(x, Math.floor(y / 4));
    return moves % 2 === 1 ? "Hitesh" : "Piyush";
    return "";
  }
}
