/*
1. Two Sum

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/


//Solution:
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // loop through values in array
    // at every value in the array, calcuclate the 'pair' im searching for- target-current value
    // check to see if the key(number) is in the object
    // if it is return the value(indexes)
    // else add it as a new key value pair
    let numsObj = {};
    for (let i = 0; i < nums.length; i++) {
        let current = nums[i];
        let match = target - current;
        if (match in numsObj) {
            return [ numsObj[match],i];
        } else {
            numsObj[current] = i;
        }
    }
};

//Test:
const chai = require('./Chai.js/chai');

let nums=[2, 7, 11, 15],target=9;
chai.expect(twoSum(nums,target)).to.eql([0,1])
target=22;
chai.expect(twoSum(nums,target)).to.eql([1,3]);
nums=[1,3,2,4],target=6;
chai.expect(twoSum(nums,target)).to.eql([2,3]);
