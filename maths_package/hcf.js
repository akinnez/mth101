"use strict";
exports.__esModule = true;
var commonFactor_1 = require("./commonFactor");
function HCF(num, num1, num2) {
    var hcf = 0;
    for (var index = 0; index < (0, commonFactor_1["default"])(num, num1, num2).length; index++) {
        var element = (0, commonFactor_1["default"])(num, num1, num2)[index];
        if (element > hcf) {
            hcf = element;
        }
    }
    return hcf;
}
exports["default"] = HCF;
