"use strict";
exports.__esModule = true;
var sort_1 = require("./sort");
function range(arr) {
    return (0, sort_1["default"])(arr)[arr.length - 1] - (0, sort_1["default"])(arr)[0];
}
exports["default"] = range;
