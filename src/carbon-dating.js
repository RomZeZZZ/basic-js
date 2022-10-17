const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
// function dateSample(/* sampleActivity */) {
//   console.log(typeof arguments[0])
//   return (!isNaN(arguments[0]) && typeof arguments[0] == "string") ? Math.ceil(Math.log(MODERN_ACTIVITY/Math.ceil(arguments[0]))/(0.69314/HALF_LIFE_PERIOD)) : false);
// }
// console.log(dateSample(3))
/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(/* sampleActivity */) {
  if (Number(arguments[0]) > 15) {
    return false;
  } else if (Number(arguments[0]) < 1) {
    return false;
  }
  return ((Number(arguments[0]) && typeof arguments[0] == "string") ? Math.ceil(Math.log(MODERN_ACTIVITY/arguments[0])/(0.693/HALF_LIFE_PERIOD)) : false);
}

module.exports = {
  dateSample
};
