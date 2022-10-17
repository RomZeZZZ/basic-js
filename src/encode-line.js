const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(/* str */) {
  let counter = 1;
  let returnArr = [];
  arguments[0].split('').forEach((element, index) => {
    if (element == arguments[0].split('')[index + 1]) {
      counter++;
    } else {
      counter == 1 ? returnArr.push(element) : returnArr.push(counter + element);
      counter = 1;     
    }
  });
  return returnArr.join('');
}
// console.log(encodeLine('aabbbc'))
module.exports = {
  encodeLine
};
