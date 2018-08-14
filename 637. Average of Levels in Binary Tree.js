/*
637. Average of Levels in Binary Tree

Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.
Example 1:
Input:
    3
   / \
  9  20
    /  \
   15   7
Output: [3, 14.5, 11]
Explanation:
The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11. Hence return [3, 14.5, 11].
Note:
The range of node's value is in the range of 32-bit signed integer.
*/


//Solution:
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var averageOfLevels = function(root) {
    const queue = [[root, 0]];
    let results = [];
    let candidate;
    let currentSum = 0;
    let currentLength = 0;
    let currentLevel = 0;
    while (queue.length > 0) {
        if (queue[0][0].left) {
            queue.push([queue[0][0].left, queue[0][1] + 1]);
        }
        if (queue[0][0].right) {
            queue.push([queue[0][0].right, queue[0][1] + 1]);
        }
        candidate = queue.shift();
        if (currentLevel === candidate[1]) {
            currentSum += candidate[0].val;
            currentLength += 1;
            
        } else {
            currentLevel += 1;
            results.push(currentSum / currentLength || 0);
            currentSum = candidate[0].val;
            currentLength = 1;
        }
    }
    results.push(currentSum / currentLength || 0);
    return results;
};


//Test:
const chai = require('./Chai.js/chai');

let input = new TreeNode(3);
input.left = new TreeNode(9);
input.right = new TreeNode(20);
input.right.left = new TreeNode(15);
input.right.right = new TreeNode(7);


chai.expect(averageOfLevels(input)).to.eql([3, 14.5, 11]);
