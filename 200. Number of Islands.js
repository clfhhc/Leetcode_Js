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
  const breakup = 20;
  if (!grid.length) { return 0; }
  const gridBin = [];
  grid.forEach(row => {
    const temp = [];
    let part = 0;
    while (row.length > part * breakup) {
      temp.push(parseInt(row.slice(Math.max(row.length - (part + 1) * breakup, 0), row.length - part * breakup).join(''), 2));
      part++;
    }
    gridBin.push(temp.slice());
  })
  let islandCounter = 0;
  let counter = 0
  const recurse = (i, part, j) => {
    gridBin[i][part] ^= j;
    let nextI, nextPart, nextJ;

    for (let k = 0; k < 4; k++) {
      switch (k) {
        case 0:
          nextI = i - 1;
          nextPart = part;
          nextJ = j;
          break;
        case 1:
          nextI = i;
          if (j >> 1) {
            nextPart = part;
            nextJ = j >> 1;
          } else {
            nextPart = part - 1;
            nextJ = (gridBin[nextI] && gridBin[nextI][nextPart] && (1 << (breakup - 1))) || 0;
          }
          break;
        case 2:
          nextI = i + 1;
          nextPart = part;
          nextJ = j;
          break;
        case 3:
          nextI = i;
          if ((j << 1) <= (1 << breakup - 1)) {
            nextPart = part;
            nextJ = j << 1;
          } else {
            nextPart = part + 1;
            nextJ = 1;
          }
      }
      if (nextI >= 0 && nextPart >= 0 && nextI < gridBin.length && nextPart < gridBin[nextI].length && (gridBin[nextI][nextPart] & nextJ)) {
        recurse(nextI, nextPart, nextJ);
      }
    }

  }

  let row = 0;
  while (row < gridBin.length) {
    let part = 0;
    while (part < gridBin[row].length) {
      while (gridBin[row][part]) {
        islandCounter++;
        recurse(row, part, -gridBin[row][part] & gridBin[row][part]);
      }
      part++;
    }
    row++;
  }
  return islandCounter;
};



// test:
const chai = require('./Chai.js/chai');

let inputs = [
  [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]],
  [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]],
  [["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","0","0","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","0","0","0","0","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"]]
];
let expecteds = [1, 3, 3];
inputs.forEach((input, index) => {
  chai.expect(numIslands(input)).to.equal(expecteds[index]);
})
// console.log(numIslands(inputs[2]));