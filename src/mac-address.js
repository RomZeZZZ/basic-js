const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  n = n.split('-');
  let returnValue = true;
  let regexp = /^[0-9a-fA-F]+$/;
  if (n.length != 6) {
    returnValue = false;
  }  else {
    n.forEach(element => {
      if (!regexp.test(element)) {
        returnValue = false;
      }
    });
  }
  return returnValue;
}

console.log(isMAC48Address('Z1-1B-63-84-45-E6'))
module.exports = {
  isMAC48Address
};
