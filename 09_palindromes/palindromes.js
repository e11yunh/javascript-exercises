const palindromes = function (str) {
    // Time Complexity of O(n^2)
    let modified_str = str.trim().toLowerCase().replace(/[\s!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '')
    console.log(modified_str);
    let isPalindrome = false;
    // Base case
    if (modified_str.length <= 1) {
        isPalindrome = true;
    } 
    // recursion case
    else {
        if (modified_str.charAt(0) === modified_str.charAt(modified_str.length - 1)) {
            return palindromes(modified_str.slice(1, -1))
        };
    };
    return isPalindrome;
};

// Better solution 
const fastPalindromes = function (str) {
    // Time Complexity of O(n)
    let clean_str = str.trim().toLowerCase().replace(/[\s!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '')
    let reversed_str = clean_str.split('').reverse().join('')
    
    return clean_str === reversed_str;
}

// Do not edit below this line
module.exports = palindromes;
