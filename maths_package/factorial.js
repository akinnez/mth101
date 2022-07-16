"use strict";
exports.__esModule = true;
function factorial(num) {
    var n = 1;
    for (var index = 1; index <= num; index++) {
        n *= index;
    }
    return n;
}
exports["default"] = factorial;
