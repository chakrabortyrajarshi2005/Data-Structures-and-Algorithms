Magician's Unique Tricks
medium

Tags

Companies

Hints
Problem Title: Optimal Partition
Problem Description:
Given a string s, partition the string into one or more substrings such that the characters in each substring are unique. That is, no letter appears in a single substring more than once.

Return the minimum number of substrings in such a partition.

Note that each character should belong to exactly one substring in a partition.

Examples:
Example 1:

Input: s = "abacaba"
Output: 4
Explanation:
Two possible partitions are ("a","ba","cab","a") and ("ab","a","ca","ba").
It can be shown that 4 is the minimum number of substrings needed.
Example 2:

Input: s = "ssssss"
Output: 6
Explanation:
The only valid partition is ("s","s","s","s","s","s").
Constraints:
1 <= s.length <= 10^5

s consists of only English lowercase letters.

Story:
Imagine a young magician named Piyush who has a mystical maze. Every time he wants to perform one of his enchanting tricks, he needs to pass through certain mystical doors in the maze. Each door has a letter engraved on it, and these letters are critical because they dictate the kind of magical performance that can be executed. However, Piyush follows a strict rule: he can only pass through a door with a specific letter once per trick, otherwise something perilous might occur causing disaster in the land of magic!

Now, Piyush possesses a series of letters, each of them represents a mystical door he might wish to open. His aim is to figure out how to traverse these letters into the minimal number of different tricks (or in mystical terms, mazes) so that no door is traversed more than once in any one maze.

To illustrate, assume Piyush’s string of letters is "abacaba". If we analyze closely, he can traverse the doors into four distinct mazes like this: 1) "a", 2) "ba", 3) "cab", 4) "a". Each maze represents a successful trick where Piyush manages to pass through each door without repeating any letter in that particular trick.

Conversely, if the string is "ssssss", the sole approach for Piyush to navigate his magic is to handle each letter 's' as a separate maze. Thus, he ends up with 6 unique mazes, each involving one 's'.

The challenge tying Piyush is to deduce the minimum number of mazes required to perform his magical journeys using the unique door letters without repeating them in a single maze! Your goal is to assist him in discovering that! For every string, ensure to determine how many different mazes need to be traversed to exploit all the letters in such a fashion that no letter is repeated in any single maze.

Constraints
1 <= s.length <= 10^5

s consists of only English lowercase letters.

Submissions 49

Acceptance Rate 49%class Solution {
    minPartitions(s: string): number {
        let seen = new Set<string>();
        let count = 1;

        for (const ch of s) {
            if (seen.has(ch)) {
                count++;
                seen.clear();
            }
            seen.add(ch);
        }

        return count;
    }
}
