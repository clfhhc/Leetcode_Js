/*
14. Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.
*/


//Solution:
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(!strs.length) return '';
    if(strs.length === 1) return strs[0];
    
    let prefix = strs[0];
    
    for(let i in strs) {
        while(strs[i].indexOf(prefix) !== 0) {
        prefix = prefix.substring(0, prefix.length - 1);
        if(!prefix.length) return '';
        }
    }
    return prefix;
};


//Test:
const chai = require('./Chai.js/chai');

chai.expect(longestCommonPrefix([])).to.equal("");
chai.expect(longestCommonPrefix(["abcg","abd","abeg"])).to.equal("ab");
chai.expect(longestCommonPrefix(["aa","a"])).to.equal("a");
chai.expect(longestCommonPrefix(["a","b"])).to.equal("");
chai.expect(longestCommonPrefix(["aac","a","ccc"])).to.equal("");