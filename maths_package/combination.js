"use strict";
exports.__esModule = true;
var factorial_1 = require("./factorial");
function combination(num, num1) {
    if (num == null || num1 == null) {
        return new Error('Invalid Input');
    }
    if (num < num1) {
        return new Error('First number must be greater than or equal to the second number');
    }
    return (0, factorial_1["default"])(num) / ((0, factorial_1["default"])(num - num1) * (0, factorial_1["default"])(num1));
}
exports["default"] = combination;
