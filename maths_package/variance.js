"use strict";
exports.__esModule = true;
var mean_1 = require("./mean");
function variance(arr) {
    var deviation = 0;
    var d = 0;
    for (var index = 0; index < arr.length; index++) {
        d = Math.pow((arr[index] - (0, mean_1["default"])(arr)), 2);
        deviation += d;
    }
    return deviation / arr.length;
}
exports["default"] = variance;
