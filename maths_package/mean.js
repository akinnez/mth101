"use strict";
exports.__esModule = true;
function getMean(arr) {
    var sum = 0;
    for (var index = 0; index < arr.length; index++) {
        sum += arr[index];
    }
    return sum / arr.length;
}
exports["default"] = getMean;
