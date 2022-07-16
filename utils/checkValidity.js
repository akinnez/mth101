"use strict";
exports.__esModule = true;
function checkValidity(val) {
    if (!val) {
        return new Error('Invalid input');
    }
    if (val === []) {
        return new Error('invalid input');
    }
}
exports["default"] = checkValidity;
