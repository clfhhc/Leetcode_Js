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
  if (!grid.length) { return 0; }
  const gridBin = [];
  grid.forEach(row => {
    gridBin.push(parseInt(row.join(''), 2));
  })
  let islandCounter = 0;
  let counter = 0
  const recurse = (i, j) => {
    console.log(i, j.toString(2));
    gridBin[i] ^= j;
    let nextI, nextJ;

    for (let k = 0; k < 4; k++) {
      switch (k) {
        case 0:
          nextI = i - 1;
          nextJ = j;
          break;
        case 1:
          nextI = i;
          nextJ = j >> 1;
          break;
        case 2:
          nextI = i + 1;
          nextJ = j;
          break;
        case 3:
          nextI = i;
          nextJ = j << 1;
      }
      if (nextI >= 0 && nextI < grid.length && (gridBin[nextI] & nextJ)) {
        recurse(nextI, nextJ);
      }
    }

  }

  let row = 0;
  while (row < gridBin.length) {
    while (gridBin[row]) {
      islandCounter++;
      recurse(row, -gridBin[row] & gridBin[row]);
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
// inputs.forEach((input, index) => {
//   chai.expect(numIslands(input)).to.equal(expecteds[index]);
// })
numIslands(inputs[2]);