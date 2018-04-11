/*
69. Sqrt(x)

Implement int sqrt(int x).

Compute and return the square root of x.

x is guaranteed to be a non-negative integer.
*/


//Solution:
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    return Math.floor(x**0.5);
};


//Test:
const chai = require('./Chai.js/chai');

chai.expect(mySqrt(4)).to.equal(2);
chai.expect(mySqrt(8)).to.equal(2);