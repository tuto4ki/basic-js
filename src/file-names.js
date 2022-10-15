const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles( names ) {
  for (let i = 0; i < names.length; i++) {
    let flag = true;
    for (j = i - 1; j >= 0 && flag; j--) {
      let reg = new RegExp(`${names[i]}\\(\\d\\)`);
      if (reg.test(names[j])) {
        let arrCon = names[j].split('(');
        names[i] = names[i] + '(' + (Number(arrCon[arrCon.length - 1].split(')')[0]) + 1) + ')';
        flag = false;
      }
      else if (names[j] == names[i]) {
        names[i] = names[i] + '(1)';
        flag = false;
      }
    }
  }
  return names;
}

module.exports = {
  renameFiles
};
