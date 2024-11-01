const convertToCelsius = function(fahrenheightTemperature) {
  const celsiusTemperature = 1 / 1.8 * (fahrenheightTemperature - 32);
  return +celsiusTemperature.toFixed(1);
};

const convertToFahrenheit = function(celsiusTemperature) {
  const fahrenheightTemperature = 1.8 * celsiusTemperature + 32;
  return +fahrenheightTemperature.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
