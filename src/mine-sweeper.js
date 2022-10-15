const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper( matrix ) {
  let matrixNew = [];
  for(let i = 0; i < matrix.length; i++) {
    matrixNew[i] = [];
    for(let j = 0; j < matrix[i].length; j++) {
      matrixNew[i][j] = 0;
      for (let iNew = i > 0 ? i - 1 : i; iNew <= i + 1 && iNew < matrix.length ; iNew++) {
        for (let jNew = j > 0 ? j - 1: j; jNew <= j + 1 && jNew < matrix[iNew].length; jNew++) {
          if ((i != iNew || j != jNew) && matrix[iNew][jNew]) {
            matrixNew[i][j]++;
          }
        }
      }
    }
  }
  return matrixNew;
}

module.exports = {
  minesweeper
};
