Substring With Concatenation of All Words
Accepted
easy

Tags

Companies

Hints
Problem Statement
You are given a string s and an array of words words. All the words in words are of the same length.

Return all starting indices of substring(s) in s that is a concatenation of each word in words exactly once and without any intervening characters. The answer can be returned in any order.

Description

This problem tests your ability to scan through substrings of uniform size, use hash maps for frequency tracking, and perform basic string manipulation.

Input:
A string s consisting of lowercase English letters (1 ≤ s.length ≤ 100).

A list of strings words (1 ≤ words.length ≤ 5, 1 ≤ words[i].length ≤ 10) where all words[i] are the same length and contain only lowercase letters.

Output:
An array of integers representing all starting indices in s where the concatenation of all words in words starts.

Example 1:
Input: {"s": "barfoothefoobarman", "words": ["foo","bar"]}
Output: [0,9] 
Explanation: Substrings starting at index 0 ("barfoo") and 9 ("foobar") are both valid concatenations.

Constraints
1 ≤ s.length ≤ 100

1 ≤ words.length ≤ 5

1 ≤ words[i].length ≤ 10

All words[i] are of the same length

s and all words[i] consist of lowercase English letters only
class Solution {
  findSubstring(s: string, words: string[]): number[] {
    const result: number[] = [];
    if (words.length === 0) return result;

    const wordLen = words[0].length;
    const wordCount = words.length;
    const totalLen = wordLen * wordCount;

    const wordFreq = new Map<string, number>();
    for (const word of words) {
      wordFreq.set(word, (wordFreq.get(word) || 0) + 1);
    }
    for (let i = 0; i <= s.length - totalLen; i++) {
      const seen = new Map<string, number>();
      let j = 0;

      while (j < wordCount) {
        const start = i + j * wordLen;
        const word = s.substring(start, start + wordLen);

        if (!wordFreq.has(word)) break;

        seen.set(word, (seen.get(word) || 0) + 1);
        if (seen.get(word)! > wordFreq.get(word)!) break;

        j++;
      }

      if (j === wordCount) result.push(i);
    }

    return result;
  }
}
