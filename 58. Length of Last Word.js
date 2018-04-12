/*
58. Length of Last Word

Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

If the last word does not exist, return 0.

Note: A word is defined as a character sequence consists of non-space characters only.

Example:

Input: "Hello World"
Output: 5
*/


//Solution:
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    /*
    s=s.trim();
    let counter=0;
    let i=s.length-1;
    while (![""," "].includes(s.charAt(i))) {
        counter++;
        i--;
    }
    return counter;
    */
   return s.trim().split(" ").pop().length;
};


//Test:
const chai = require('./Chai.js/chai');

chai.expect(lengthOfLastWord("Hello World")).to.equal(5);
chai.expect(lengthOfLastWord("")).to.equal(0);
chai.expect(lengthOfLastWord("a ")).to.equal(1);