"use strict";
exports.__esModule = true;
exports.arctan = exports.arccos = exports.arcsin = exports.cosecInDegree = exports.secInDegree = exports.cotInDegree = exports.tanInDegree = exports.cosInDegree = exports.sinInDegree = exports.radToDeg = exports.degToRad = exports.toSignificantFigures = exports.toDecimalPlaces = void 0;
function toDecimalPlaces(params, val) {
    if (val < 0 || val > 20) {
        return;
    }
    return parseFloat(params.toFixed(val));
}
exports.toDecimalPlaces = toDecimalPlaces;
function toSignificantFigures(params, val) {
    if (val < 1 || val > 21) {
        return;
    }
    return parseFloat(params.toPrecision(val));
}
exports.toSignificantFigures = toSignificantFigures;
function degToRad(val) {
    return val * (3.141592653589793 / 180);
}
exports.degToRad = degToRad;
function radToDeg(val) {
    return val * (180 / 3.141592653589793);
}
exports.radToDeg = radToDeg;
function sinInDegree(val) {
    return Math.sin(degToRad(val));
}
exports.sinInDegree = sinInDegree;
function cosInDegree(val) {
    return Math.cos(degToRad(val));
}
exports.cosInDegree = cosInDegree;
function tanInDegree(val) {
    return sinInDegree(val) / cosInDegree(val);
}
exports.tanInDegree = tanInDegree;
function cotInDegree(val) {
    return cosInDegree(val) / sinInDegree(val);
}
exports.cotInDegree = cotInDegree;
function secInDegree(val) {
    return 1 / cosInDegree(val);
}
exports.secInDegree = secInDegree;
function cosecInDegree(val) {
    return 1 / sinInDegree(val);
}
exports.cosecInDegree = cosecInDegree;
function arcsin(val) {
    return radToDeg(Math.asin(val));
}
exports.arcsin = arcsin;
function arccos(val) {
    return radToDeg(Math.acos(val));
}
exports.arccos = arccos;
function arctan(val) {
    return arcsin(val) / arccos(val);
}
exports.arctan = arctan;
