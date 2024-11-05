const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(numbers) {
	return numbers.reduce((accumulator, number) => {
    return accumulator + number;
  }, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((accumulator, number) => {
    return accumulator * number;
  })
};

const power = function(x, y) {
	return x ** y;
};

const factorial = function(x) {
  let product = 1;
	for (let i = 1; i <= x; i++) {
    product *= i
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
