const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
/*---------------------DONE--------------------------*/
function countCats(/* matrix */) {
  return [].concat(...([].concat(...arguments))).filter(item => item === '^^').length;
}

module.exports = {
  countCats
};
