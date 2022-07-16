"use strict";
exports.__esModule = true;
var sort_1 = require("./sort");
function getMedian(arr) {
    (0, sort_1["default"])(arr);
    if (arr.length % 2 === 0)
        return ((arr[(arr.length / 2) - 1] + arr[(arr.length / 2)]) / 2);
    return arr[(arr.length - 1) / 2];
}
exports["default"] = getMedian;
