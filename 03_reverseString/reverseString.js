const reverseString = function(string) {
  let reversedString = '';

  for (let index = 1; index <= string.length; index++) {
    reversedString += string.at(-index);
  }

  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
