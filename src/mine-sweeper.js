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
function minesweeper(matrix) {
  let returnArr = [];
  matrix.forEach((element, index) => {
    element.forEach((elem, i) => {
      let counter = 0;
      if (matrix[index - 1]) {
        if (matrix[index - 1][i - 1] === true) {
          counter++
        }
      };
      if (matrix[index - 1]) {
        if (matrix[index - 1][i] === true) {
          counter++
        }
      };
      if (matrix[index - 1]) {
        if (matrix[index - 1][i + 1] === true) {
          counter++
        }
      };
      if (matrix[index]) {
        if (matrix[index][i - 1] === true) {
          counter++
        }
      };
      if (matrix[index]) {
        if (matrix[index][i + 1] === true) {
          counter++
        }
      };
      if (matrix[index + 1]) {
        if (matrix[index + 1][i - 1] === true) {
          counter++
        }
      };
      if (matrix[index + 1]) {
        if (matrix[index + 1][i] === true) {
          counter++
        }
      };
      if (matrix[index + 1]) {
        if (matrix[index + 1][i + 1] === true) {
          counter++
        }
      };
      if (returnArr[index]) {
        returnArr[index].push(counter);
        } else {
          returnArr.push([counter]);
        }
    });
      
   
  });
  return returnArr;
}
// console.log(minesweeper([
//     [true, false, false],
//     [false, true, false],
//     [false, false, false]
//    ]))
module.exports = {
  minesweeper
};
