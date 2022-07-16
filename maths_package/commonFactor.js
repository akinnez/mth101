"use strict";
exports.__esModule = true;
var getValue_1 = require("../utils/getValue");
function common_factor(num, num1, num2) {
    var newarr = [];
    var commonThree = [];
    for (var i = 0; i < (0, getValue_1.val1)(num).length; i++) {
        for (var j = 0; j < (0, getValue_1.val2)(num1).length; j++) {
            if ((0, getValue_1.val1)(num)[i] == (0, getValue_1.val2)(num1)[j]) {
                newarr.push((0, getValue_1.val1)(num)[i]);
            }
        }
    }
    if (!num2) {
        return newarr;
    }
    for (var k = 0; k < newarr.length; k++) {
        for (var l = 0; l < (0, getValue_1.val3)(num2).length; l++) {
            if (newarr[k] == (0, getValue_1.val3)(num2)[l]) {
                commonThree.push((0, getValue_1.val3)(num2)[l]);
            }
        }
    }
    return commonThree;
}
exports["default"] = common_factor;
