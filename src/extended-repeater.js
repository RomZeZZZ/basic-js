const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options ) {

  str === null ? str = 'null' : str === true ? str = 'true' : str = str + '';
  let addStr = options.addition === null ?  'null' : options.addition === false ? 'false' : options.addition ? options.addition + '' : '';
  let sep = options.separator ? options.separator + '' : '+';
  let addSep = options.additionSeparator ? options.additionSeparator + '' : '|';
  let returnArr = [];
  if (options.repeatTimes) {
    for (let index = 0; index < options.repeatTimes; index++) {
      returnArr.push([str + addStr]);
    }
  } else {
    returnArr.push([str + addStr]);
  }
  if (options.additionRepeatTimes) {
    for (let index = 0; index < returnArr.length; index++) {
      for (let i = 1; i < options.additionRepeatTimes; i++) {
        returnArr[index].push(addStr);
      }
    }
  }
  returnArr = returnArr.map(element => element.join(addSep));
return returnArr.join(sep);
}
// console.log(repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' }))
module.exports = {
  repeater
};
