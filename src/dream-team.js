const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(/* members */) {
  let returnArr = [];
  if (arguments[0] != null && arguments[0].length) {
    for (let index = 0; index < arguments[0].length; index++) {
      if (typeof arguments[0][index] == 'string') {
        arguments[0][index] = arguments[0][index].toUpperCase().split(/\s+/).join('');
        returnArr.push(arguments[0][index][0]);
      }
    }
  } else {
    return false;
  }
  console.log(returnArr.sort())
  return returnArr.sort().join('');
}


module.exports = {
  createDreamTeam
};
