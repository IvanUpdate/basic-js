const CustomError = require("../extensions/custom-error");
let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
class VigenereCipheringMachine {
  constructor(options = true){
    this.options = options;
  }

  encrypt(messange, key) {
    if(typeof messange == 'undefined' || typeof key == 'undefined'){
      throw new Error();
    }

    
    const upperMessange = messange.toUpperCase();
    const upperKey = key.toUpperCase();

    const arrLetters = [...letters];
    const arrMessange = [...upperMessange];
    const arrKey = [...upperKey];

    const keyAllString = arrMessange.map((elem, index) => elem = arrKey[index % arrKey.length]);
  
    const indexMessangeLetter = arrMessange.map(elem =>arrLetters.indexOf(elem) == -1 ? elem : arrLetters.indexOf(elem));
    
    const indexKeyLetter = keyAllString.map(elem => arrLetters.indexOf(elem));
  
    let keyIndex = 0;
  
    const cipherIndex = indexMessangeLetter.map(elem => typeof elem !== 'number' ? elem || keyIndex++: elem + indexKeyLetter[keyIndex++]);
  
    const correctChipherIndex = cipherIndex.map(elem => (elem >= letters.length ? elem - letters.length : elem));
  
    const chiher = correctChipherIndex.map(elem =>typeof elem !== 'number' ? elem : arrLetters[elem]);

    if(this.options == false){
      return chiher.reverse().join('');
    }
    return chiher.join('');
  }    
  decrypt(messange, key) {
    if(typeof messange == 'undefined' || typeof key == 'undefined'){
      throw new Error();
    }
    const upperMessange = messange.toUpperCase();
    const upperKey = key.toUpperCase();

    const arrLetters = [...letters];
    const arrMessange = [...upperMessange];
    const arrKey = [...upperKey];
    
    const keyAllString = arrMessange.map((elem, index) => elem = arrKey[index % arrKey.length]);

    

    const indexMessangeLetter = arrMessange.map(elem =>arrLetters.indexOf(elem) == -1 ? elem : arrLetters.indexOf(elem));
    
    const indexKeyLetter = keyAllString.map(elem => arrLetters.indexOf(elem));
  
    let keyIndex = 0;
  
    const cipherIndex = indexMessangeLetter.map(elem => typeof elem !== 'number' ? elem || keyIndex++: letters.length + elem - indexKeyLetter[keyIndex++]);
  
    const correctChipherIndex = cipherIndex.map(elem => (elem >= letters.length ? elem - letters.length : elem));
  
    const chiher = correctChipherIndex.map(elem =>typeof elem !== 'number' ? elem : arrLetters[elem]);
    if(this.options == false){
      return chiher.reverse().join('');
    }
    return chiher.join('');
  }

}

module.exports = VigenereCipheringMachine;
