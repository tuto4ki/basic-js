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
function deleteDigit( n ) {
  let bigNumber = 0;
  nStr = String(n);
  for(let i = 0; i< nStr.length; i++) {
    let newNum = Number(nStr.substring(0, i) + nStr.substring(i + 1, nStr.length));
    if(bigNumber < newNum) {
      bigNumber = newNum;
    }
  }
  return bigNumber;
}

module.exports = {
  deleteDigit
};
