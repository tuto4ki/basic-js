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
function encodeLine( str ) {
  if(!str) return str;
  let char = str[0];
  let count = 0;
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (char === str[i]) {
      count++;
    }
    else {
      newStr = newStr + (count > 1 ? count : '') + char;
      char = str[i];
      count = 1;
    }
  }
  newStr = newStr + (count > 1 ? count : '') + char;
  return newStr;
}

module.exports = {
  encodeLine
};
