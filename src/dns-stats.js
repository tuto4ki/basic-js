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
function getDNSStats( domains ) {
  let countDomain = {};
  for (let i = 0; i < domains.length; i++) {
    let items = domains[i].split('.');
    let str = '';
    for(let j = items.length - 1; j >= 0; j--) {
      str += `.${items[j]}`;
      if (countDomain.hasOwnProperty([str])) {
        countDomain[str] = countDomain[str] + 1;
      }
      else {
        countDomain[str] = 1;
      }
    }
  }
  return countDomain;
}

module.exports = {
  getDNSStats
};
