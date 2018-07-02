/*
392. Is Subsequence

Given a string s and a string t, check if s is subsequence of t.

You may assume that there is only lower case English letters in both s and t. t is potentially a very long (length ~= 500,000) string, and s is a short string (<=100).

A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, "ace" is a subsequence of "abcde" while "aec" is not).

Example 1:
s = "abc", t = "ahbgdc"

Return true.

Example 2:
s = "axc", t = "ahbgdc"

Return false.

Follow up:
If there are lots of incoming S, say S1, S2, ... , Sk where k >= 1B, and you want to check one by one to see if T has its subsequence. In this scenario, how would you change your code?
*/

// Solution:
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const isSubsequence = function(s, t) {
  let pointer = 0;
  for (let char of s) {
    pointer = t.indexOf(char, pointer);
    if (pointer === -1) {
      return false;
    }
    pointer += 1;
  }
  return true;
};

// test:
const chai = require('./Chai.js/chai');

chai.expect(isSubsequence('abc', 'ahbgdc')).to.be.true;
chai.expect(isSubsequence('axc', 'ahbgdc')).to.be.false;
chai.expect(isSubsequence('', 'ahbgdc')).to.be.true;

