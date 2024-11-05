const palindromes = function (string) {
  let array = string.toLowerCase().split('');

  array = array.filter((char) => {
    const charValue = char.charCodeAt(0);
    const isLetter = charValue >= 'a'.charCodeAt(0) && charValue <= 'z'.charCodeAt(0);
    const isNumber = charValue >= '0'.charCodeAt(0) && charValue <= '9'.charCodeAt(0);
    return isLetter || isNumber;
  });
  
  for (let l = 0; l < Math.floor(array.length / 2); l++) {
    let r = array.length - l - 1;
    if (array[l] != array[r]) return false;
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
