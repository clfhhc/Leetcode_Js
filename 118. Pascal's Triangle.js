/*
118. Pascal's Triangle

Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it.
*/


/**
 * @param {number} numRows
 * @return {number[][]}
 */

var generate = function(numRows) {
    let generated = [];
    if (numRows >= 1) {
        generated.push([1]);
    }
    for (let n = 1; n < numRows; n++) {

        generated.push(Array.from(generated[n-1]));
        for (let i = 1; i <= n - 1; i++) {
            generated[n][i]+=generated[n - 1][i - 1];
        }
        generated[n].push(1);
    }
    
    return generated;
};


//Test:
const chai = require('./Chai.js/chai');

let numRows = 5;
let expectedArray = [
    [1],
   [1,1],
  [1,2,1],
 [1,3,3,1],
[1,4,6,4,1]
];
chai.expect(generate(numRows)).to.eql(expectedArray)

