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
function repeater( str, options ) {
  let separator = options.hasOwnProperty(['separator']) ? options.separator : '+';
  let additionSeparator = options.hasOwnProperty(['additionSeparator']) ? options.additionSeparator : '|';
  let repeatTimes = options.hasOwnProperty(['repeatTimes']) ? options.repeatTimes : 1;
  let additionRepeatTimes = options.hasOwnProperty(['additionRepeatTimes']) ? options.additionRepeatTimes : 1;
  let addition = options.hasOwnProperty(['addition']) ? String(options.addition) : '';
  let strRepeat = '';
  if(addition) {
    strRepeat = (additionRepeatTimes > 1 ? (addition + additionSeparator).repeat(additionRepeatTimes - 1) : '') + addition;
  }
  let strAddition = str + strRepeat;
  strRepeat = (repeatTimes > 1 ? (strAddition + separator).repeat(repeatTimes - 1) : '') + strAddition;
  return strRepeat;
}

module.exports = {
  repeater
};
