Minimum Steps to Set the Correct Time on the Watch
Accepted
medium

Tags

Companies

Hints
You are given two strings initialTime and targetTime representing two 24-hour clock times.

24-hour times are formatted as "HH:MM", where HH can range from 00 to 23, and MM from 00 to 59. The earliest time possible is 00:00, and the latest is 23:59.

In one operation, you can increase the time initialTime by 1, 5, 15, or 60 minutes. You are allowed to perform this operation any number of times.

Return the minimum number of operations required to convert initialTime to targetTime.

Examples:
Example 1:

Input: initialTime = "01:40", targetTime = "03:45"
Output: 3
Explanation:
- Add 60 minutes to initialTime. It becomes "02:40".
- Add 60 minutes to initialTime. It becomes "03:40".
- Add 5 minutes to initialTime. It becomes "03:45".
It can be proven that it is not possible to convert `initialTime` to `targetTime` in fewer than 3 operations.
Example 2:

Input: initialTime = "08:00", targetTime = "08:01"
Output: 1
Explanation: Only one addition of 1 minute is needed to change `initialTime` to `targetTime`, requiring a minimum of 1 operation.
Conceptual Story:
In a distant land, Piyush receives a magical watch from Hitesh. This isn't an ordinary watch; it's enchanted to only allow time adjustments in increments of 1, 5, 15, or 60 minutes. Tasked with attending an important meeting, Piyush must ensure he arrives exactly on time by mastering the art of time adjustments.

The challenge lies in determining the least number of magical operations required to adjust the watch from the current time to the intended time. With each tick precise and essential, every moment counts in Piyush's magical journey to punctuality. Will you guide Piyush to make the most efficient use of the enchanted watch's powers?

Constraints
Constraints:

current and correct are in the format "HH:MM"

current <= correct
class Solution {
  minOperationsToAdjustTime(initialTime: string, targetTime: string): number {
    const toMinutes = (t: string): number => {
      const [hh, mm] = t.split(":").map(Number);
      return hh * 60 + mm;
    };

    let diff = toMinutes(targetTime) - toMinutes(initialTime);
    let operations = 0;

    const steps = [60, 15, 5, 1];

    for (const step of steps) {
      operations += Math.floor(diff / step);
      diff %= step;
    }

    return operations;
  }
}
