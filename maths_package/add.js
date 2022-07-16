"use strict";
exports.__esModule = true;
function add() {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
    }
    var sum = 0;
    for (var index = 0; index < params.length; index++) {
        var element = params[index];
        sum += element;
    }
    return sum;
}
exports["default"] = add;
