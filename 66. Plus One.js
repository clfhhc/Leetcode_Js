/*
66. Plus One

Given a non-negative integer represented as a non-empty array of digits, plus one to the integer.

You may assume the integer do not contain any leading zero, except the number 0 itself.

The digits are stored such that the most significant digit is at the head of the list.
*/


//Solution:
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    /*
    let result;
    if (digits[digits.length-1]<9) {
        result=Array.prototype.slice.apply(digits);
        result[result.length-1]++;
    } else if(digits.length===1){
        result=[1,0];
    } else {
        result=[...plusOne(digits.slice(0,-1)),0];
    };
    return result;
    */
    let i=digits.length-1;
    while (i>=0) {
        if (digits[i]===9) {
            digits[i]=0;
            i--;
        } else {
            digits[i]++;
            break;
        }
    }
    if (i<0) {
        digits.unshift(1);
    }
    return digits;
};


//Test:
const chai = require('./Chai.js/chai');

chai.expect(plusOne([0])).to.eql([1]);
chai.expect(plusOne([9])).to.eql([1,0]);
chai.expect(plusOne([9,9,9])).to.eql([1,0,0,0]);