const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chainArr: [],
  getLength() {
    this.chainArr.length;
    return this;
  },
  addLink(value) {
    if (value === undefined) {
      this.chainArr.push(`( )`);
    } else {
      this.chainArr.push(`( ${value} )`);
    }
    return this;
  },
  removeLink(position) {
    if (typeof position === 'number' && Number.isInteger(position) && position > 0) {
      if (position > this.chainArr.length) {
        this.chainArr = [];
        throw new Error('You can\'t remove incorrect link!');
      }
        this.chainArr.splice(position-1,1);
    } else {
      this.chainArr = [];
      throw new Error('You can\'t remove incorrect link!');
    }
    return this;
  },
  reverseChain() {
    this.chainArr.reverse();
    return this;
  },
  finishChain() {
    let x = chainMaker.chainArr.join('~~');
    this.chainArr = [];
    return x;
  }
};
module.exports = {
  chainMaker
};
