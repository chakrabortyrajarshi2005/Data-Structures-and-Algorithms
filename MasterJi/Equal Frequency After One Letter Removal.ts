Equal Frequency After One Letter Removal
Accepted
medium

Tags

Companies

Hints
You are given a 0-indexed string word, consisting of lowercase English letters. You need to select one index and remove the letter at that index from word so that the frequency of every letter present in word is equal.

Return true if it is possible to remove one letter so that the frequency of all letters in word are equal, and false otherwise.

Note:

The frequency of a letter x is the number of times it occurs in the string.

You must remove exactly one letter and cannot choose to do nothing.

Example 1:
Input: word = "abcc"
Output: true
Explanation: Select index 3 and delete it: word becomes "abc" and each character has a frequency of 1.
Example 2:
Input: word = "aazz"
Output: false
Explanation: We must delete a character, so either the frequency of "a" is 1 and the frequency of "z" is 2, or vice versa. It is impossible to make all present letters have equal frequency.
The goal of this problem is to determine if it's possible to remove a single letter from the given string such that all remaining letters have the same frequency. Follow the steps to check the frequency of each letter, remove one, and see if the condition is met.

Constraints
1 <= word.length <= 100

word consists of lowercase English letters only
class Solution {
  equalFrequencyAfterOneRemoval(word: string): boolean {
    const freq: number[] = new Array(26).fill(0);

    for (const ch of word) {
      freq[ch.charCodeAt(0) - 97]++;
    }

    for (let i = 0; i < 26; i++) {
      if (freq[i] === 0) continue;
      freq[i]--;
      let expected = 0;
      let valid = true;

      for (let j = 0; j < 26; j++) {
        if (freq[j] === 0) continue;
        if (expected === 0) {
          expected = freq[j];
        } else if (freq[j] !== expected) {
          valid = false;
          break;
        }
      }

      freq[i]++; 
      if (valid) return true;
    }

    return false;
  }
}

