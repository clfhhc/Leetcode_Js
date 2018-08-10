/*
2. Add Two Numbers

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
*/


//Solution:
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const addTwoNumbers = function(l1, l2) {
    let overflow = 0;
    let temp;
    const result = new ListNode(0);
    let node = result;
    // while (pointer1 && pointer2) {
    //     temp = pointer1.val + pointer2.val + overflow;
    //     overflow = temp >= 10 ? 1 : 0;
    //     node.next = new ListNode(temp - overflow * 10);
    //     node = node.next;
    //     pointer1 = pointer1.next;
    //     pointer2 = pointer2.next;
    // }
    
    // while (pointer1) {
    //     console.log(!!pointer1);
    //     temp = pointer1.val + overflow;
    //     overflow = temp >= 10 ? 1 : 0;
    //     node.next = new ListNode(temp - overflow * 10);
    //     node = node.next;
    //     pointer1 = pointer1.next;
    // }
    // while (pointer2) {
    //     temp = pointer2.val + overflow;
    //     overflow = temp >= 10 ? 1 : 0;
    //     node.next = new ListNode(temp - overflow * 10);
    //     node = node.next;
    //     pointer2 = pointer2.next;
    // }
    // if (overflow) {
    //     node.next = new ListNode(overflow);
    // }
    while (l1 || l2 || overflow) {
        temp = overflow;

        if (l1) {
            temp += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            temp += l2.val;
            l2 = l2.next;
        }

        if (temp >= 10) {
            overflow = 1;
            node.next = new ListNode(temp - overflow * 10);
        } else {
            overflow = 0;
            node.next = new ListNode(temp);
        }
        node = node.next;
    }
    return result.next;
};

//Test:
const chai = require('./Chai.js/chai');



const numToList = (number) => {
    const list = new ListNode();
    let node = list;
    while (number) {
        const nextNum = Math.floor(number / 10);
        node.next = new ListNode(number - nextNum * 10);
        node = node.next;
        number = nextNum;
    }
    return list.next;
}

const listToNum = (list) => {
    let digit = 0;
    let node = list;
    let result = 0;
    while (node) {
        result += node.val * (10 ** digit);
        digit += 1;
        node = node.next;
    }
    return result;
}

let num1 = 5;
let num2 = 5;
let num3 = num1 + num2;

let l1 = numToList(num1);
let l2 = numToList(num2);

chai.expect(listToNum(addTwoNumbers(l1, l2))).to.equal(num3)
