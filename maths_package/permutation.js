"use strict";
exports.__esModule = true;
var factorial_1 = require("./factorial");
function permutation(num, num1) {
    if (num < num1) {
        throw new Error('First number must be greater than or equal to the second number');
    }
    return (0, factorial_1["default"])(num) / (0, factorial_1["default"])(num - num1);
}
exports["default"] = permutation;
