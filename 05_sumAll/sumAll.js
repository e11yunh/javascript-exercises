const sumAll = function(num1, num2) {
    if (num1 > 0 && num2 > 0 && (Number.isInteger(num1) && Number.isInteger(num2))) {
        let total = 0;
        if (num1 > num2) []
        let end = Math.max(num1, num2), start = Math.min(num1, num2);
        for (let i = start; i <= end; i++) {
            total += i;
        }
    
        return total;
    } else return "ERROR";

};

console.log(sumAll(-42, -3));
// Do not edit below this line
module.exports = sumAll;
