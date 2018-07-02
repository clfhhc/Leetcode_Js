/*
451. Sort Characters By Frequency

Given a string, sort it in decreasing order based on the frequency of characters.

Example 1:

Input:
"tree"

Output:
"eert"

Explanation:
'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
Example 2:

Input:
"cccaaa"

Output:
"cccaaa"

Explanation:
Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
Note that "cacaca" is incorrect, as the same characters must be together.
Example 3:

Input:
"Aabb"

Output:
"bbAa"

Explanation:
"bbaA" is also a valid answer, but "Aabb" is incorrect.
Note that 'A' and 'a' are treated as two different characters.
*/

// Solution:
/**
 * @param {string} s
 * @return {string}
 */
const frequencySort = function(s) {
    const freqObj = s.split('').reduce((accu, char) => {
      accu[char] = (accu[char] || 0) + 1;
      return accu;
    }, {});
    let result = '';
    Object.keys(freqObj).sort((key1, key2) => freqObj[key2] - freqObj[key1]).forEach(char => result = result.concat(char.repeat(freqObj[char])));
    return result;
};

// Test:
const chai = require('./Chai.js/chai');

chai.expect(frequencySort('tree')).to.equal('eetr');
chai.expect(frequencySort('cccaaa')).to.equal('cccaaa');
chai.expect(frequencySort('Aabb')).to.equal('bbAa');