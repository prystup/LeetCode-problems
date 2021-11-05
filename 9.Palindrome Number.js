// 9. Palindrome Number
// Problem: https://leetcode.com/problems/palindrome-number/

/* Given an integer x, return true if x is palindrome integer.
An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

Example 1:
Input: x = 121
Output: true */

/*
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function (x) {
  let reversNum = x.toString().split('').reverse().join('');
  return reversNum == x ? true : false;
};
