/*
7. Reverse Integer

Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output:  321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only hold integers within the 32-bit signed integer range. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
*/


//Solution:
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let absReverse=parseInt(JSON.stringify(Math.abs(x)).split("").reverse().join(""));
    return absReverse>0x7FFFFFFF ? 0 : (x<0 ? -absReverse : absReverse);
    /*
    let signX=Math.sign(x);

    let absReverse=0;
    x=Math.abs(x);
    let lastDigit;
    while (x){
        lastDigit=x%10;
        absReverse=absReverse*10+lastDigit;
        x=parseInt(x/10);
    }

    return absReverse>0x7FFFFFFF ? 0 : signX*absReverse;
    */
    
};


//Test:
const chai = require('./Chai.js/chai');

chai.expect(reverse(123)).to.equal(321);
chai.expect(reverse(-123)).to.equal(-321);
chai.expect(reverse(120)).to.equal(21);