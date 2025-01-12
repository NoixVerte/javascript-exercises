const palindromes = function (string) {
    let newString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
    let reverseString = newString.split("").reverse().join("");
    return newString == reverseString;
};

// Do not edit below this line
module.exports = palindromes;
