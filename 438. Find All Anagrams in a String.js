/*
438. Find All Anagrams in a String

Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.

The order of output does not matter.

Example 1:

Input:
s: "cbaebabacd" p: "abc"

Output:
[0, 6]

Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
Example 2:

Input:
s: "abab" p: "ab"

Output:
[0, 1, 2]

Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".
*/


//Solution:
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams=function(s,p) {
    var indexAnagrams=[];
    if (p.length>s.length) {
        return indexAnagrams;
    }

    //Hash Table
    var map= new Array(256).fill(0);
    
    for (let i=0;i<p.length;i++) {
        map[p.charCodeAt(i)]++;
    }

    var index=0;
    var index2=0;
    var unqualifiedCount=p.length;

    while (index2<p.length) {
        map[s.charCodeAt(index2)]>0 && unqualifiedCount--;
        map[s.charCodeAt(index2)]--;
        index2++;
    }

    unqualifiedCount===0 && indexAnagrams.push(index);

    while (index2<s.length) {
        map[s.charCodeAt(index)]>=0 && unqualifiedCount++;
        map[s.charCodeAt(index)]++;
        index++;

        map[s.charCodeAt(index2)]>0 && unqualifiedCount--;
        map[s.charCodeAt(index2)]--;
        index2++;

        unqualifiedCount===0 && indexAnagrams.push(index);
    }

    return indexAnagrams;
}


//Test:
const chai = require('./Chai.js/chai');

chai.expect(findAnagrams("cbaebabacd","abc")).to.eql([0,6]);
chai.expect(findAnagrams("abab","ab")).to.eql([0,1,2]);
