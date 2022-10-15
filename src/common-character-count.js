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
function getCommonCharacterCount( s1, s2 ) {
  let count = 0;
  for(let i = 0; i < s1.length; i ++) {
    let flag = 0;
    let j = 0;
    while(flag == 0 && j < s2.length) {
      if(s1[i] == s2[j]) {
        s2 = s2.substring(0, j) + s2.substring(j + 1, s2.length);
        flag = 1;
        count++;
      }
      j++;
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
