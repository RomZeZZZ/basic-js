const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let returnObj = {

  }
  domains = domains.map(element => element.split('.'));
  domains = domains.map(element => element.reverse());
  domains.forEach(elem => {
    let newDom = '';
    elem.forEach(element=> {
      newDom += '.' + element;
      newDom in returnObj ? returnObj[newDom]++ : returnObj[newDom] = 1;
    });
  })
  return returnObj;
}
// console.log(getDNSStats(['code.yandex.ru', 'music.yandex.ru', 'yandex.ru']))
module.exports = {
  getDNSStats
};
