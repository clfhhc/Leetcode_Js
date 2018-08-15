/*
84. Largest Rectangle in Histogram

Given n non-negative integers representing the histogram's bar height where the width of each bar is 1, find the area of largest rectangle in the histogram.

Above is a histogram where width of each bar is 1, given height = [2,1,5,6,2,3].

The largest rectangle is shown in the shaded area, which has area = 10 unit.

Example:

Input: [2,1,5,6,2,3]
Output: 10

*/

// Solution:
/**
 * @param {number[]} heights
 * @return {number}
 */
const largestRectangleArea = function(heights) {
    if (!heights.length) { return 0; }
    const candidateIndex = [];
    let result = 0;
    let pointer;
    heights.forEach((height, i) => {
      console.log(candidateIndex);
      if (i === 0) {
        candidateIndex.push(i);
        return;
      }
      if (height >= heights[i - 1]) {
        candidateIndex.push(i);
        console.log(candidateIndex);
      } else {
        pointer = candidateIndex.length - 1;
        while (candidateIndex.length && heights[candidateIndex[candidateIndex.length - 1]] > height) {
          const prevIndex = candidateIndex.pop();
          result = Math.max(result, heights[prevIndex] * (candidateIndex.length ? i - candidateIndex[candidateIndex.length - 1] - 1 : i));

        }
        candidateIndex.push(i);
      }
    });
    console.log(result, candidateIndex);
    while (candidateIndex.length) {
      const prevIndex = candidateIndex.pop();
      result = Math.max(result, heights[prevIndex] * (candidateIndex.length ? heights.length - candidateIndex[candidateIndex.length - 1] - 1 : heights.length));
    }
    return result;
};

// Test:
const chai = require('./Chai.js/chai');

let input = [2, 1, 5, 6, 2, 3];
let expected = 10;
chai.expect(largestRectangleArea(input)).to.equal(expected);

input = [2, 1, 2];
expected = 3;
chai.expect(largestRectangleArea(input)).to.equal(expected);

input = [4, 2, 0, 3, 2, 5];
expected = 6;
chai.expect(largestRectangleArea(input)).to.equal(expected);

input = [3, 6, 5, 7, 4, 8, 1, 0];
expected = 20;
chai.expect(largestRectangleArea(input)).to.equal(expected);

// function largestRectangleArea(height) {
//   if (height == undefined || height.length == 0) {
//       return 0;
//   }

//   let lessFromLeft = new Array(height.length);
//   let lessFromRight = new Array(height.length);
//   lessFromRight[height.length-1] = height.length;
//   lessFromLeft[0] = -1;

//   for (let i = 1; i < height.length; i++) {
//       let p = i - 1;

//       while (p >= 0 && height[p] >= height[i]) {
//           p = lessFromLeft[p];
//       }

//       lessFromLeft[i] = p;
//   }

//   for (let i = height.length-2; i >= 0; i--) {
//       let p = i + 1;

//       while (p < height.length && height[p] >= height[i]) {
//           p = lessFromRight[p];
//       }
      
//       lessFromRight[i] = p;
//   }

//   let maxArea = 0;
//   for (let i = 0; i < height.length; i++) {
//       maxArea = Math.max(maxArea, height[i] * (lessFromRight[i] - lessFromLeft[i] - 1));
//   }

//   return maxArea;
// }