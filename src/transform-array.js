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
function transform( arr ) {
  if (!Array.isArray(arr))
    throw new Error(`\'arr\' parameter must be an instance of the Array!`);
  let newArr = [];
  let flag = true;
  for(let i = 0; i < arr.length; i++) {
    switch(arr[i]) {
      case '--double-prev':
        if(i - 1 >= 0 && flag)
          newArr.push(arr[i - 1]);
        flag = true;
        break;
      case '--discard-prev':
        if(flag)
          newArr.pop();
        flag = true;
        break;
      case '--double-next':
        if (i + 1 < arr.length)
          newArr.push(arr[i + 1]);
        flag = true;
        break;
      case '--discard-next':
        i++;
        flag = false;
        break;
      default:
        newArr.push(arr[i]);
        flag = true;
    }
  }
  return newArr;
}

module.exports = {
  transform
};
