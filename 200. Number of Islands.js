/*
200. Number of Islands

Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input:
11110
11010
11000
00000

Output: 1
Example 2:

Input:
11000
11000
00100
00011

Output: 3
*/

/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function(grid) {
  if (!grid.length) return 0;
  let row0, island0, counter;
  let row1 = 0;
  let island1 = [];
  let islands = [];
  const findRoot = (array, index) => {
    while (array[index] !== index) {
      index === array[index];
    }
    return index;
  }
  const union = (array, index1, index2) => {
    const root1 = findRoot(array, index1);
    const root2 = findRoot(array, index2);
    if (root1 === root2) { return; }
    let temp;
    if (root1 < root2) {
      while (array[index1] !== array[index2]) {
        temp = array[index2]
        array[index2] = root1;
        index2 = temp;
      }
      return;
    }
    while (array[index1] !== array[index2]) {
      temp = array[index1]
      array[index1] = root2;
      index1 = temp;
    }
  }
  grid.forEach((row) => {
    row0 = row1;
    row1 = parseInt(row.join(''), 2);
    row0 = row0 & row1;
    island0 = island1.slice();
    island1 = [];
    counter = 0;
    while (row1 >> counter) {
      if (row1 & (1 << counter)) {
        if (row0 & (1 << counter)) { island1[counter] = island0[counter]; }
        // island1[counter] = island1[counter] === undefined ? island1[counter - 1] : island1[counter];
        if (!(island1[counter - 1] === undefined)) {
          // if (island1[counter] !== island1[counter - 1]) {
          //   if (findRoot(island, island1[counter]) !== findRoot(island, island[counter - 1])) {
              
          //   }
          // }
          if (island1[counter] === undefined) {
            island1[counter] = island1[counter - 1];
          } else {
            union(islands, island1[counter], island1[counter - 1]);
          }
        } else if (island1[counter] === undefined) {
          islands[islands.length] = island1[counter] = islands.length;
        }
      }
      counter ++;
    }
  })
  islandObj = {};
  islands.forEach((_, index) => { islandObj[findRoot(islands,index)] = true });
  return Object.keys(islandObj).length;
};



// test:
const chai = require('./Chai.js/chai');

let inputs = [
  [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]],
  [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]],
];
let expecteds = [1, 3];
inputs.forEach((input, index) => {
  console.log('pause');
  chai.expect(numIslands(input)).to.equal(expecteds[index]);
})

// numIslands(input[0])