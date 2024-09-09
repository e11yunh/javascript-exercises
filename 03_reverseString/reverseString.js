const reverseString = function(string) {
    const arr = string.split("");
    const reversed_arr = arr.reverse();
    
    return reversed_arr.join("");
};

// Do not edit below this line
module.exports = reverseString;
