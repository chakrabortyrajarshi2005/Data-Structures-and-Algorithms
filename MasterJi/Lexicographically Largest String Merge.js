Lexicographically Largest String Merge
Accepted
medium

Tags

Companies

Hints
You are given two strings word1 and word2. Your task is to construct a string merge in the following way: while either word1 or word2 is non-empty, choose one of the following options:

If word1 is non-empty, append the first character in word1 to merge and delete it from word1.

For example, if word1 = "abc" and merge = "dv", then after choosing this operation, word1 = "bc" and merge = "dva".

If word2 is non-empty, append the first character in word2 to merge and delete it from word2.

For example, if word2 = "abc" and merge = "", then after choosing this operation, word2 = "bc" and merge = "a".

Return the lexicographically largest merge you can construct.

A string a is lexicographically larger than a string b (of the same length) if in the first position where a and b differ, a has a character strictly larger than the corresponding character in b. For example, "abcd" is lexicographically larger than "abcc" because the first position they differ is at the fourth character, and d is greater than c.

Example 1:

Input: word1 = "dacaa", word2 = "dbaaa"
Output: "ddbacaaaaa"
Constraints
1 <= word1.length, word2.length <= 100

word1 and word2 consist of lowercase English letters only.

Submissions 22

Acceptance Rate 27.3%


Tags

Companies

Hint 1

Hint 2

Hint 3

Hint 4

JavaScript

JavaScript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
class Solution {
  lexicographicallyLargestMerge(word1, word2) {
    // Parameters:
    //   word1: string - the first word
    //   word2: string - the second word
    //
    // Returns:
    //   string - the lexicographically largest merge

    // Your implementation here

    let i = 0;
    let j = 0;
    let result = "";

    while (i < word1.length && j < word2.length) {
      if (word1.slice(i) > word2.slice(j)) {
        result += word1[i];
        i++;
      } else {
        result += word2[j];
        j++;
      }
    }
    if (i < word1.length) result += word1.slice(i);
    if (j < word2.length) result += word2.slice(j);

    return result;
  }
}

Test Cases
Submission Results
You must submit a solution to view the result.class Solution {
  lexicographicallyLargestMerge(word1, word2) {
    // Parameters:
    //   word1: string - the first word
    //   word2: string - the second word
    //
    // Returns:
    //   string - the lexicographically largest merge

    // Your implementation here

    let i = 0;
    let j = 0;
    let result = "";

    while (i < word1.length && j < word2.length) {
      if (word1.slice(i) > word2.slice(j)) {
        result += word1[i];
        i++;
      } else {
        result += word2[j];
        j++;
      }
    }
    if (i < word1.length) result += word1.slice(i);
    if (j < word2.length) result += word2.slice(j);

    return result;
  }
}
class Solution {
  lexicographicallyLargestMerge(word1, word2) {
    // Parameters:
    //   word1: string - the first word
    //   word2: string - the second word
    //
    // Returns:
    //   string - the lexicographically largest merge

    // Your implementation here

    let i = 0;
    let j = 0;
    let result = "";

    while (i < word1.length && j < word2.length) {
      if (word1.slice(i) > word2.slice(j)) {
        result += word1[i];
        i++;
      } else {
        result += word2[j];
        j++;
      }
    }
    if (i < word1.length) result += word1.slice(i);
    if (j < word2.length) result += word2.slice(j);

    return result;
  }
}
