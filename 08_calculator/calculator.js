const add = function(n1, n2) {
  return n1 + n2
	
};

const subtract = function(n1, n2) {
  return n1 - n2
	
};

const sum = function(arr) {
  return arr.reduce ((sum, current) => {
    return sum + current;
  }, 0)
};


const multiply = function(arr) {
  return arr.reduce((product, current) => {
    return product * current
  })

};

const power = function(n1, n2) {
  return n1 ** n2;
};

const factorial = function(num) {
  // Base case
	if (num === 0 || num === 1) {
	  return 1;
  // recursion case  
	} else return (num * factorial(num - 1));
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
