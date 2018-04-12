/*
53. Maximum Subarray

Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
the contiguous subarray [4,-1,2,1] has the largest sum = 6.

More practice:
If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
*/


//Solution:
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (!nums.length) {
        return 0;
    }
    let curSum=0;
    let maxSum=Number.MIN_SAFE_INTEGER;
    nums.forEach((item)=>{
        curSum=Math.max(curSum+item,item);
        maxSum=Math.max(curSum,maxSum);
    });
    return maxSum;
};


//Test:
const chai = require('./Chai.js/chai');

chai.expect(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])).to.equal(6);
chai.expect(maxSubArray([-2,1])).to.equal(1);