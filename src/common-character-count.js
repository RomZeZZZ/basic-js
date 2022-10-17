const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(/* s1, s2 */) {
  let len = arguments[1].length;
  return arguments[0].split('').filter(item => {
    for (let index = 0; index < len; index++) {
      if (item == arguments[1][index]) {
        console.log(arguments[1])
        arguments[1] = arguments[1].replace(arguments[1][index], '');
        return true;
      }
    }
    return false;
  }).length;
}
module.exports = {
  getCommonCharacterCount
};
