const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let returnArr = [];
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!"); 
  }
  arr.forEach((item, index) => {
    switch (true) {
      case arr[index-1] == '--discard-next':
        returnArr.pop();
        break;
      case item == '--discard-prev':
        if (arr[index-1] != returnArr[returnArr.length - 1] || arr[index-1] == undefined) {
          break;
        }
        returnArr.pop();
        break;
      case item == '--double-next':
        if (arr[index+1] == undefined) {
          break;
        }
        returnArr.push(arr[index+1]);
        break;
      case item == '--double-prev':
        if (arr[index-1] != returnArr[returnArr.length - 1] || arr[index-1] == undefined) {
          break;
        }
        returnArr.push(arr[index-1]);
        break;
      default:
        if (item == '--discard-next' && index == arr.length - 1) {
          break;
        }
        returnArr.push(item);
        break;
    }
  });
  return returnArr;
}

module.exports = {
  transform
};
