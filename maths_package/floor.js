"use strict";
exports.__esModule = true;
function floor(val) {
    if (val.toString().indexOf('.') == -1)
        return val;
    return parseInt((val.toString()).slice(0, (val.toString()).indexOf('.')));
}
exports["default"] = floor;
