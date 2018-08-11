/*
3. Longest Substring Without Repeating Characters

Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/


//Solution:
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let charCode;
    let length = 0;
    let maxLength = 0;
    let pointer0 = 0;
    let pointer1 = 0;
    const charArr = [];
    while (pointer1 < s.length) {
        charCode = s.charCodeAt(pointer1);
        if (charArr[charCode] === undefined) {
            charArr[charCode] = pointer1;
            length += 1;
            pointer1 += 1;
        } else {
            maxLength = Math.max(maxLength, length);
            while (pointer0 !== charArr[charCode]) {
                charArr[s.charCodeAt(pointer0)] = undefined;
                length -= 1;
                pointer0 += 1;
            }
            charArr[s.charCodeAt(pointer0)] = undefined;
            length -= 1;
            pointer0 += 1;
        }
    }
    maxLength = Math.max(maxLength, length);
    return maxLength;
};


//Test:
const chai = require('./Chai.js/chai');

chai.expect(lengthOfLongestSubstring('abcabcbb')).to.equal(3);
chai.expect(lengthOfLongestSubstring('bbbbb')).to.equal(1);
chai.expect(lengthOfLongestSubstring('pwwkew')).to.equal(3);
