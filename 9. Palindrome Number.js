/*
9. Palindrome Number

Determine whether an integer is a palindrome. Do this without extra space.
*/


//Solution:
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    x=x.toString();
    for (let i=0;i<x.length/2;i++) {
        if (x.charAt(i)!==x.charAt(x.length-i-1)) {
            return false;
        }
    }
    return true;
};


//Test:
const chai = require('./Chai.js/chai');

chai.expect(isPalindrome(123321)).to.equal(true);
chai.expect(isPalindrome(123)).to.equal(false);
chai.expect(isPalindrome(856658)).to.equal(true);