const palindromes = function (string) {
    let newString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
    for (let i  = 0; i < newString.length; i++) {
        if (newString[i] != newString[newString.length - i - 1]) return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
