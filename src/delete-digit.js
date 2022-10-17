const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(/* n */) {
  let maxNumber = 0;
  let string = ''
  arguments[0] = String(arguments[0]);
  for (let index = 0; index < arguments[0].length; index++) {
    string = arguments[0].replace(arguments[0][index], '');
    if (+string > maxNumber) {
      maxNumber = +string;
      maxNumberIndex = index;
    }
  }
return maxNumber;
}
module.exports = {
  deleteDigit
};
