const sumAll = function(startNumber, endNumber) {
  if (isNaN(startNumber) || isNaN(endNumber) ||
      startNumber < 0 || endNumber < 0 || 
      !Number.isInteger(startNumber) || !Number.isInteger(endNumber)) {
    return 'ERROR';
  }
  const numberOfTerms = Math.abs(endNumber - startNumber) + 1;
  return numberOfTerms * (startNumber + endNumber) / 2;
};

// Do not edit below this line
module.exports = sumAll;
