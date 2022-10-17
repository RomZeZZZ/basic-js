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
  constructor(value) {
    if (value === false) {
      this.value = false;
    } else {
      this.value = true;
    }
  }
  encrypt(input, key) {
    if (input === undefined || key === undefined) {
      throw new Error('Incorrect arguments!'); 
    }
    let alphabet =  'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.toLocaleLowerCase();
    let inputArr = input.toLocaleLowerCase().split('');
    let keyArr = key.toLocaleLowerCase().split('');
    let outpu = [];
    let inputArrUnicode = [];
    let keysOfset = []
    let keysOfsetCounter = 0;
    let encriptArr = [];
    for (let i = 0; i < inputArr.length; i++) {
      if (keysOfsetCounter > keyArr.length - 1) {
        keysOfsetCounter = 0;
      }
      if (alphabet.indexOf(inputArr[i]) >= 0) {
        inputArrUnicode.push(alphabet.indexOf(inputArr[i]));
        keysOfset.push(alphabet.indexOf(keyArr[keysOfsetCounter]));
        keysOfsetCounter++;
      } else {
        inputArrUnicode.push(inputArr[i]);
        keysOfset.push(inputArr[i]);
      }
    }
    for (let index = 0; index < inputArrUnicode.length; index++) {
      if (typeof inputArrUnicode[index] === 'number') {
        encriptArr.push((inputArrUnicode[index] + keysOfset[index])%26);
      } else {
        encriptArr.push(inputArrUnicode[index]);
      }
    }
    for (let index = 0; index < encriptArr.length; index++) {
      if (typeof encriptArr[index] === 'number') {
        outpu.push(alphabet[encriptArr[index]]);
      } else {
        outpu.push(encriptArr[index]);
      }
    }
    if (this.value === false) {
      return outpu.reverse().join('').toUpperCase(); 
    } else {
      return outpu.join('').toUpperCase(); 
    }
  }
  decrypt(input, key) {
    if (input === undefined || key === undefined) {
      throw new Error('Incorrect arguments!'); 
    }
    let alphabet =  'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.toLocaleLowerCase();
    let inputArr = input.toLocaleLowerCase().split('');
    let keyArr = key.toLocaleLowerCase().split('');
    let outpu = [];
    let inputArrUnicode = [];
    let keysOfset = []
    let keysOfsetCounter = 0;
    let encriptArr = [];
    for (let i = 0; i < inputArr.length; i++) {
      if (keysOfsetCounter > keyArr.length - 1) {
        keysOfsetCounter = 0;
      }
      if (alphabet.indexOf(inputArr[i]) >= 0) {
        inputArrUnicode.push(alphabet.indexOf(inputArr[i]));
        keysOfset.push(alphabet.indexOf(keyArr[keysOfsetCounter]));
        keysOfsetCounter++;
      } else {
        inputArrUnicode.push(inputArr[i]);
        keysOfset.push(inputArr[i]);
      }
    }
    for (let index = 0; index < inputArrUnicode.length; index++) {
      if (typeof inputArrUnicode[index] === 'number') {
        encriptArr.push(inputArrUnicode[index] - keysOfset[index] < 0 ? inputArrUnicode[index] - keysOfset[index] + 26 : inputArrUnicode[index] - keysOfset[index]);
      } else {
        encriptArr.push(inputArrUnicode[index]);
      }
    }
    for (let index = 0; index < encriptArr.length; index++) {
      if (typeof encriptArr[index] === 'number') {
        outpu.push(alphabet[encriptArr[index]]);
      } else {
        outpu.push(encriptArr[index]);
      }
    }
    if (this.value === false) {
      return outpu.reverse().join('').toUpperCase(); 
    } else {
      return outpu.join('').toUpperCase(); 
    }
  
  }
}

// const directMachine = new VigenereCipheringMachine();

// console.log(directMachine.encrypt('attack At dawn!', 'alphonse'))
// console.log(directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse'))
// console.log('aBCDEFGHIJKLMNOPQRSTUVWXYZ'.length)
module.exports = {
  VigenereCipheringMachine
};




