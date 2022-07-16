"use strict";
exports.__esModule = true;
var hcf_1 = require("./hcf");
function LCM(num, num1, num2) {
    var rem = num / (0, hcf_1["default"])(num, num1, num2);
    var rem1 = num1 / (0, hcf_1["default"])(num, num1, num2);
    var rem2 = num2 / (0, hcf_1["default"])(num, num1, num2);
    if (!num2) {
        return (0, hcf_1["default"])(num, num1, num2) * rem * rem1;
    }
    return (0, hcf_1["default"])(num, num1, num2) * ((rem * rem1 * rem2) / ((0, hcf_1["default"])(rem, rem1) * (0, hcf_1["default"])(rem1, rem2) * (0, hcf_1["default"])(rem, rem2)));
}
exports["default"] = LCM;
