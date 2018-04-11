/*
13. Roman to Integer

Given a roman numeral, convert it to an integer.

Input is guaranteed to be within the range from 1 to 3999.
*/


//Solution:
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let conversionObj= {
        M:1000,
        D:500,
        C:100,
        L:50,
        X:10,
        V:5,
        I:1
    }
    let result=0;
    for (let i=0;i<s.length-1;i++) {
        let cur= conversionObj[s.charAt(i)]
        let next= conversionObj[s.charAt(i+1)] 
        cur<next ? result-=cur : result+=cur;
    }
    result+=conversionObj[s.charAt(s.length-1)];
    return result;
};


//Test:
const chai = require('./Chai.js/chai');

chai.expect(romanToInt('DCCVII')).to.equal(707);
chai.expect(romanToInt('CM')).to.equal(900);
chai.expect(romanToInt('XCIX')).to.equal(99);