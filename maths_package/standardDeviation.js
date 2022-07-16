"use strict";
exports.__esModule = true;
var variance_1 = require("./variance");
function standardDeviation(arr) {
    return Math.sqrt((0, variance_1["default"])(arr));
}
exports["default"] = standardDeviation;
