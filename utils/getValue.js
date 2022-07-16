"use strict";
exports.__esModule = true;
exports.val3 = exports.val2 = exports.val1 = void 0;
function val1(val1) {
    var arr = [];
    for (var i = 0; i <= val1; i++) {
        if (val1 % i === 0) {
            arr.push(i);
        }
    }
    return arr;
}
exports.val1 = val1;
function val2(val2) {
    var arr2 = [];
    for (var j = 0; j <= val2; j++) {
        if (val2 % j === 0) {
            arr2.push(j);
        }
    }
    return arr2;
}
exports.val2 = val2;
function val3(val3) {
    var arr3 = [];
    for (var k = 0; k <= val3; k++) {
        if (val3 % k === 0) {
            arr3.push(k);
        }
    }
    return arr3;
}
exports.val3 = val3;
