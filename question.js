const questions = [
  {
    question: "Two Sum",
    description: `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.`,
    problemId: "1",
    acceptance: "49.9%",
    difficulty: "Easy",
    examples: [
      `Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].`,
      `Input: nums = [3,2,4], target = 6
Output: [1,2]`,
    ],
  },
  {
    question: "Add Two Numbers",
    description: `You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.`,
    problemId: "2",
    acceptance: "40.5%",
    difficulty: "Medium",
    examples: [
      `Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.`,
      `Input: l1 = [0], l2 = [0]
Output: [0]`,
      `Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]`,
    ],
  },
  {
    question: "Longest Substring Without Repeating Characters",
    description: `Given a string s, find the length of the longest 
substring
 without repeating characters.`,
    problemId: "3",
    acceptance: "33.8%",
    difficulty: "Medium",
    examples: [
      `Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.`,
      `Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.`,
      `Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.`,
    ],
  },
  {
    question: "Median of Two Sorted Arrays",
    description: `Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).`,
    problemId: "4",
    acceptance: "36.5%",
    difficulty: "Hard",
    examples: [
      `Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.`,
      `Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.`,
    ],
  },
  {
    question: "Zigzag Conversion",
    description: `The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);`,
    problemId: "6",
    acceptance: "45.1%",
    difficulty: "Medium",
    examples: [
      `Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"`,
      `Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I`,
    ],
  },
  {
    question: "Reverse Integer",
    description: `Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).`,
    problemId: "7",
    acceptance: "27.5%",
    difficulty: "Medium",
    examples: [
      `Input: x = 123
Output: 321`,
      `Input: x = -123
Output: -321"
`,
      `Input: x = 120
Output: 21`,
    ],
  },
  {
    question: "String to Integer (atoi)",
    description: `Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).

The algorithm for myAtoi(string s) is as follows:

Read in and ignore any leading whitespace.
Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.
Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -231 should be clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1.
Return the integer as the final result.`,
    problemId: "8",
    acceptance: "16.6%",
    difficulty: "Medium",
    examples: [
      `Input: s = "42"
Output: 42
Explanation: The underlined characters are what is read in, the caret is the current reader position.
Step 1: "42" (no characters read because there is no leading whitespace)
         ^
Step 2: "42" (no characters read because there is neither a '-' nor '+')
         ^
Step 3: "42" ("42" is read in)
           ^
The parsed integer is 42.
Since 42 is in the range [-231, 231 - 1], the final result is 42.`,
      `Input: s = "   -42"
Output: -42
Explanation:
Step 1: "   -42" (leading whitespace is read and ignored)
            ^
Step 2: "   -42" ('-' is read, so the result should be negative)
             ^
Step 3: "   -42" ("42" is read in)
               ^
The parsed integer is -42.
Since -42 is in the range [-231, 231 - 1], the final result is -42.
`,
      `Input: s = "4193 with words"
Output: 4193
Explanation:
Step 1: "4193 with words" (no characters read because there is no leading whitespace)
         ^
Step 2: "4193 with words" (no characters read because there is neither a '-' nor '+')
         ^
Step 3: "4193 with words" ("4193" is read in; reading stops because the next character is a non-digit)
             ^
The parsed integer is 4193.
Since 4193 is in the range [-231, 231 - 1], the final result is 4193.`,
    ],
  },
  {
    question: "Palindrome Number",
    description: `Given an integer x, return true if x is a 
palindrome
, and false otherwise.`,
    problemId: "9",
    acceptance: "53.7%",
    difficulty: "Easy",
    examples: [
      `Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.`,
      `Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
`,
      `Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.`,
    ],
  },
  {
    question: "Regular Expression Matching",
    description: `Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:

'.' Matches any single character.​​​​
'*' Matches zero or more of the preceding element.
The matching should cover the entire input string (not partial).`,
    problemId: "10",
    acceptance: "28.0%",
    difficulty: "Hard",
    examples: [
      `Input: s = "aa", p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".`,
      `Input: s = "aa", p = "a*"
Output: true
Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
`,
      `Input: s = "ab", p = ".*"
Output: true
Explanation: ".*" means "zero or more (*) of any character (.)".`,
    ],
  },
];

module.exports = questions;
