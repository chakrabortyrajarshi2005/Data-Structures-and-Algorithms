
Circular Gas Station Journey
Accepted
medium

Tags

Companies

Hints
Imagine you are on an adventurous road trip around a circular island with n gas stations along your route. Each gas station i provides a certain amount of gasoline denoted by gas[i]. To travel from the i-th station to the next (i + 1)-th station, you need cost[i] amount of gas.

Your car starts with an empty tank at one of these gas stations, and the tank capacity is unlimited. Your goal is to find a starting gas station from which you can complete the entire circuit in a clockwise direction. If you can travel around the circuit once and return to the starting station, return the index of the starting gas station, otherwise return -1. If a solution exists, it is guaranteed to be unique.

Example 1:
Input: gas = [2,4,3,6,8], cost = [5,3,4,7,2]
Output: 4
Explanation:
Start at station 4 (index 4) and fill up with 8 unit of gas. Your tank = 0 + 8 = 8
Travel to station 0. Your tank = 8 - 2 + 2 = 8
Travel to station 1. Your tank = 8 - 5 + 4 = 7
Travel to station 2. Your tank = 7 - 3 + 3 = 7
Travel to station 3. Your tank = 7 - 4 + 6 = 9
Travel to station 4. The cost is 7. Your gas is just enough to travel back to station 4.
Therefore, return 4 as the starting index.
Example 2:
Input: gas = [1,2,3], cost = [3,4,3]
Output: -1
Explanation:
You can't start at station 0 or 1, as there is not enough gas to travel to the next station.
Let's start at station 2 and fill up with 3 unit of gas. Your tank = 0 + 3 = 3
Travel to station 0. Your tank = 3 - 3 + 1 = 1
Travel to station 1. Your tank = 1 - 3 + 2 = 0
You cannot travel back to station 2, as it requires 3 unit of gas but you have 0.
Therefore, you can't travel around the circuit once.
Constraints
n == gas.length == cost.length\n- 1 <= n <= 10^5\n- 0 <= gas[i], cost[i] <= 10^4
class Solution {
  gasolineAdventure(gas: number[], cost: number[]): number {
    const n = gas.length;
    let total = 0;
    let tank = 0;
    let start = 0;

    for (let i = 0; i < n; i++) {
      const diff = gas[i] - cost[i];
      total += diff;
      tank += diff;

      if (tank < 0) {
        start = i + 1;
        tank = 0;
      }
    }

    return total >= 0 ? start : -1;
  }
}
