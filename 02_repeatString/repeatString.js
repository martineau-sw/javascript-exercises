const repeatString = function(string, multiple) {
  if(multiple < 0) {
    return 'ERROR';
  }

  let repeatedString = '';
  for (let count = 0; count < multiple; count++) {
    repeatedString += string;
  }

  return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
