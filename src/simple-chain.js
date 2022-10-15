const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain : new Array(), 
  getLength() {
    return this.chain.length;
  },
  addLink( value ) {
    this.chain.push(String(value));
    return this;
  },
  removeLink( position ) {
    if(typeof position != 'number' || !((position - 1) in this.chain)) {
      this.chain = new Array();
      throw new Error(`You can't remove incorrect link!`);
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let str = `( ${this.chain.join(' )~~( ')} )`;
    this.chain = new Array();
    return str;
  }
};

module.exports = {
  chainMaker
};
