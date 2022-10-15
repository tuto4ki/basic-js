const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor (straight = true) {
    this.straight = straight;
  }
  encrypt() {
    if(arguments.length < 2 || typeof arguments[0] != 'string' || typeof arguments[1] != 'string')
      throw new Error('Incorrect arguments!');
    let str = arguments[0].toUpperCase();
    let cript = arguments[1].toUpperCase();
    let criptNew = '';
    for(let i = 0, j = 0; i < str.length; i++) {
      if (j >= cript.length) j = 0;
      if ( /[A-Z]/.test(str[i]) ) {
        let c = (str[i].charCodeAt(0) - 'A'.charCodeAt(0) + cript[j].charCodeAt(0) - 'A'.charCodeAt(0)) % 26;
        c += 'A'.charCodeAt(0);
        criptNew += String.fromCharCode(c);
        j++;
      }
      else {
        criptNew += str[i];
      }
    }
    return this.straight ? criptNew : criptNew.split('').reverse().join('');
  }
  decrypt() {
    if(arguments.length < 2 || typeof arguments[0] != 'string' || typeof arguments[1] != 'string')
      throw new Error('Incorrect arguments!');
    let str = arguments[0].toUpperCase();
    let cript = arguments[1].toUpperCase();
    let criptNew = '';
    for(let i = 0, j = 0; i < str.length; i++) {
      if (j >= cript.length) j = 0;
      if ( /[A-Z]/.test(str[i]) ) {
        let c = (str[i].charCodeAt(0) - cript[j].charCodeAt(0) + 26) % 26;
        c += 'A'.charCodeAt(0);
        criptNew += String.fromCharCode(c);
        j++;
      }
      else {
        criptNew += str[i];
      }
    }
    return this.straight ? criptNew : criptNew.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
