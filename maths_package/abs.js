"use strict";
exports.__esModule = true;
function abs(val) {
    var absArr = [];
    if (!val) {
        return new Error('Invalid input');
    }
    if (typeof (val) == 'number') {
        if (val < 0) {
            return val *= -1;
        }
        return val;
    }
    for (var index = 0; index < val.length; index++) {
        var element = val[index];
        if (element < 0) {
            absArr.push(element *= -1);
        }
        else {
            absArr.push(element);
        }
    }
    return absArr;
}
exports["default"] = abs;
