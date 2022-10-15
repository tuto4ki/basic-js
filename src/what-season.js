const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason( date ) {
  try{
    if(typeof (+date) === 'number') {
      if(arguments.length == 0) return 'Unable to determine the time of year!';
      if(!(date instanceof Date)) {
        throw  new Error('Invalid date!');
      }
      let month = date.getMonth();
      if(month < 2 || month == 11)  return 'winter';
      if(month >= 2 && month <= 4)  return 'spring';
      if(month >= 5 && month<= 7) return 'summer';
      return 'autumn';
    }
  }
  catch(e) {
    throw new Error('Invalid date!');
  }
}

module.exports = {
  getSeason
};
