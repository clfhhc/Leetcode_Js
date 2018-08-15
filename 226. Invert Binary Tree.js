/*
226. Invert Binary Tree

Invert a binary tree.

Example:

Input:

     4
   /   \
  2     7
 / \   / \
1   3 6   9
Output:

     4
   /   \
  7     2
 / \   / \
9   6 3   1

Trivia:
This problem was inspired by this original tweet by Max Howell:

Google: 90% of our engineers use the software you wrote (Homebrew), but you can’t invert a binary tree on a whiteboard so f*** off.
*/

// Solution:
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const invertTree = function(root) {
    if (!root) {
      return root;
    }
    const stack = [root];
    while (stack.length) {
      const node = stack.pop();
      const temp = node.left;
      node.left = node.right;
      node.right = temp;
      if (node.left) {
        stack.push(node.left);
      }
      if (node.right) {
        stack.push(node.right);
      }
    }
    return root;
};

// Test:
const chai = require('./Chai.js/chai');

let input = new TreeNode(4);
input.left = new TreeNode(2);
input.right = new TreeNode(7);
input.left.left = new TreeNode(1);
input.left.right = new TreeNode(3);
input.right.left = new TreeNode(6);
input.right.right = new TreeNode(9);

let expected = new TreeNode(4);
expected.right = new TreeNode(2);
expected.left = new TreeNode(7);
input.right.right = new TreeNode(1);
input.right.left = new TreeNode(3);
input.left.right = new TreeNode(6);
input.left.left = new TreeNode(9);

chai.expect(invertTree(input)).to.eql(expected);
