const fibonacci = function(n) {
    // Time Complexity of O(2^n)
    n = parseInt(n);
    if (n >= 0) {
        // base case
        if (n === 0 || n === 1) {
            return n;
        } 
        return (fibonacci(n-1) + fibonacci(n-2))
    } else return "OOPS";
};

console.log(fibonacci(120));
// Do not edit below this line
module.exports = fibonacci;
