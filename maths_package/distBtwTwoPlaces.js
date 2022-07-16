"use strict";
exports.__esModule = true;
var differences_1 = require("../utils/differences");
var conversion_1 = require("../utils/conversion");
function distBtwTwoPlaces(pos1, pos2) {
    var PI = 3.141592653589793;
    if (pos1[0] == pos2[0]) {
        return ((0, differences_1["default"])(pos1, pos2) / 360) * 2 * PI * 6371 *
            (0, conversion_1.cosInDegree)(parseInt(pos1[0].slice(0, pos1[0].indexOf("N" || "S" || 'E' || "W"))));
    }
    if (pos1[1] == pos2[1]) {
        return (((0, differences_1["default"])(pos1, pos2) * 2 * PI * 6371) / 360);
    }
    return 2 * 6371 * (Math.asin(Math.sqrt(Math.pow(((0, conversion_1.sinInDegree)(((0, differences_1["default"])(pos1, pos2)[0] / 2))), 2) +
        (0, conversion_1.cosInDegree)(parseInt(pos1[0].slice(0, pos1[0].indexOf("N" || "S" || 'E' || "W")))) *
            (0, conversion_1.cosInDegree)(parseInt(pos2[0].slice(0, pos2[0].indexOf("N" || "S" || 'E' || "W")))) *
            Math.pow(((0, conversion_1.sinInDegree)(((0, differences_1["default"])(pos1, pos2)[1] / 2))), 2))));
}
exports["default"] = distBtwTwoPlaces;
