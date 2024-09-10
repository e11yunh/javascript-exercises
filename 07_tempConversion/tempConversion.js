const convertToCelsius = function(temp_F) {
  let temp_C = Math.ceil(((temp_F - 32) * (5/9)) * 10)/10;
  return temp_C;
};

const convertToFahrenheit = function(temp_C) {
  let temp_F = Math.ceil((temp_C * 9/5 + 32) * 10)/10;
  return temp_F;
};


console.log(convertToCelsius(-442));
console.log(convertToFahrenheit(-228));
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
