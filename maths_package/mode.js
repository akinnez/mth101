"use strict";
exports.__esModule = true;
function getMode(arr) {
    var mode = [];
    var max = 0;
    var count = 0;
    for (var index = 0; index < arr.length; index++) {
        var element = arr[index];
        if (!mode[element]) {
            mode[element] = 1;
        }
        mode[element]++;
        if (count < mode[element]) {
            max = element;
            count = mode[element];
        }
    }
    return max;
}
exports["default"] = getMode;
