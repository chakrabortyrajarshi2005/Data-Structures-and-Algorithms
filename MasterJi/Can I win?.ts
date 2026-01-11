Can I win?
medium

Tags

Companies

Hints
In a variant of the classic "100 game", two participants take turns selecting a number from a common pool containing the integers 1 through maxChoosableInteger. Once a number is chosen it is removed from the pool and cannot be used again. The chosen number is added to a running total. The player who makes the running total reach or exceed desiredTotal wins the game.

Your task is to determine whether the player who makes the first move can always force a win, assuming both players play optimally. Return true if the first player has a guaranteed winning strategy; otherwise, return false.

Example 1

Input: maxChoosableInteger = 10, desiredTotal = 11
Output: false
Explanation: No matter which number the first player picks, the second player can always choose a number that reaches or exceeds 11 and win.
Example 2

Input: maxChoosableInteger = 10, desiredTotal = 0
Output: true
Example 3

Input: maxChoosableInteger = 10, desiredTotal = 1
Output: true
Note: The range of maxChoosableInteger is small (up to 20), which allows a complete exploration of all possible game states while keeping track of which numbers have already been taken.

Constraints
1 <= maxChoosableInteger <= 20

0 <= desiredTotal <= 300

Each integer from 1 to maxChoosableInteger can be chosen at most once

If the sum of all numbers 1 … maxChoosableInteger is less than desiredTotal, the first player cannot winclass Solution {
    canIWin(maxChoosableInteger: number, desiredTotal: number): boolean {
        if (desiredTotal <= 0) return true;

        const totalSum = (maxChoosableInteger * (maxChoosableInteger + 1)) / 2;
        if (totalSum < desiredTotal) return false;

        const memo = new Map<number, boolean>();

        const dfs = (usedMask: number, remaining: number): boolean => {
            if (memo.has(usedMask)) {
                return memo.get(usedMask)!;
            }

            for (let i = 1; i <= maxChoosableInteger; i++) {
                const bit = 1 << (i - 1);
                if ((usedMask & bit) !== 0) continue;

                if (i >= remaining) {
                    memo.set(usedMask, true);
                    return true;
                }

                if (!dfs(usedMask | bit, remaining - i)) {
                    memo.set(usedMask, true);
                    return true;
                }
            }

            memo.set(usedMask, false);
            return false;
        };

        return dfs(0, desiredTotal);
    }
}
