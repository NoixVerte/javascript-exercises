const fibonacci = function(num) {
    if (num < 0) return "OOPS";
    if (num == 0) return 0;
    let currentNumber = 1;
    let previousNumber = 0;
    for (let i = 1; i < num; i++) {
        currentNumber += previousNumber;
        previousNumber = currentNumber - previousNumber;
    }
    return currentNumber;
};

// Do not edit below this line
module.exports = fibonacci;
