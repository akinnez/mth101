"use strict";
exports.__esModule = true;
var distBtwTwoPlaces_1 = require("./maths_package/distBtwTwoPlaces");
var combination_1 = require("./maths_package/combination");
var commonFactor_1 = require("./maths_package/commonFactor");
var determinant_1 = require("./maths_package/determinant");
var equation_1 = require("./maths_package/equation");
var factorial_1 = require("./maths_package/factorial");
var floor_1 = require("./maths_package/floor");
var getValue_1 = require("./utils/getValue");
var hcf_1 = require("./maths_package/hcf");
var LCM_1 = require("./maths_package/LCM");
var mean_1 = require("./maths_package/mean");
var median_1 = require("./maths_package/median");
var mode_1 = require("./maths_package/mode");
var permutation_1 = require("./maths_package/permutation");
var range_1 = require("./maths_package/range");
var sort_1 = require("./maths_package/sort");
var standardDeviation_1 = require("./maths_package/standardDeviation");
var variance_1 = require("./maths_package/variance");
var add_1 = require("./maths_package/add");
var abs_1 = require("./maths_package/abs");
var conversion_1 = require("./utils/conversion");
var MathsModule = /** @class */ (function () {
    function MathsModule() {
    }
    MathsModule.prototype.abs = function (val) {
        return (0, abs_1["default"])(val);
    };
    MathsModule.prototype.add = function () {
        var val = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            val[_i] = arguments[_i];
        }
        return add_1["default"].apply(void 0, val);
    };
    MathsModule.prototype.combination = function (val, val1) {
        return (0, combination_1["default"])(val, val1);
    };
    MathsModule.prototype.common_factor = function (val1, val2, val3) {
        return (0, commonFactor_1["default"])(val1, val2, val3);
    };
    MathsModule.prototype.determinantThreeByThree = function (a11, a12, a13, a21, a22, a23, a31, a32, a33) {
        return (0, determinant_1.determinantThreeByThree)(a11, a12, a13, a21, a22, a23, a31, a32, a33);
    };
    MathsModule.prototype.determinantTwoByTwo = function (a11, a12, a21, a22) {
        return (0, determinant_1.determinantTwoByTwo)(a11, a12, a21, a22);
    };
    MathsModule.prototype.factorial = function (val) {
        return (0, factorial_1["default"])(val);
    };
    MathsModule.prototype.factors = function (val) {
        return (0, getValue_1.val1)(val);
    };
    MathsModule.prototype.floor = function (val) {
        return (0, floor_1["default"])(val);
    };
    MathsModule.prototype.getMean = function (arr) {
        return (0, mean_1["default"])(arr);
    };
    MathsModule.prototype.getMedian = function (arr) {
        return (0, median_1["default"])(arr);
    };
    MathsModule.prototype.getMode = function (arr) {
        return (0, mode_1["default"])(arr);
    };
    MathsModule.prototype.HCF = function (val1, val2, val3) {
        return (0, hcf_1["default"])(val1, val2, val3);
    };
    MathsModule.prototype.LCM = function (val1, val2, val3) {
        return (0, LCM_1["default"])(val1, val2, val3);
    };
    MathsModule.prototype.permutation = function (val, val1) {
        return (0, permutation_1["default"])(val, val1);
    };
    MathsModule.prototype.range = function (arr) {
        return (0, range_1["default"])(arr);
    };
    MathsModule.prototype.significantFigure = function (num, sf) {
        return (0, conversion_1.toSignificantFigures)(num, sf);
    };
    MathsModule.prototype.decimalPlaces = function (num, dp) {
        return (0, conversion_1.toDecimalPlaces)(num, dp);
    };
    MathsModule.prototype.sort = function (arr) {
        return (0, sort_1["default"])(arr);
    };
    MathsModule.prototype.standardDeviation = function (arr) {
        return (0, standardDeviation_1["default"])(arr);
    };
    MathsModule.prototype.variance = function (arr) {
        return (0, variance_1["default"])(arr);
    };
    MathsModule.prototype.simuTwoVar = function (a11, a12, a21, a22, c1, c2) {
        return (0, equation_1.simuTwoVariable)(a11, a12, a21, a22, c1, c2);
    };
    MathsModule.prototype.simuThreeVar = function (a11, a12, a13, a21, a22, a23, a31, a32, a33, c1, c2, c3) {
        return (0, equation_1.simuThreeVariable)(a11, a12, a13, a21, a22, a23, a31, a32, a33, c1, c2, c3);
    };
    /**
     * Returns the approximated distance between two places on the earth map in kilometer(km).
     * @param arr An array containing latitude and longitude values e.g ["30N","40W"].
     * @param arr1 An array containing latitude and longitude values e.g ["40E", "30S"].
     */
    MathsModule.prototype.distBtwTwoPlaces = function (arr, arr1) {
        return parseInt((0, distBtwTwoPlaces_1["default"])(arr, arr1).toFixed(0));
    };
    MathsModule.prototype.degToRad = function (val) {
        return (0, conversion_1.degToRad)(val);
    };
    MathsModule.prototype.radToDeg = function (val) {
        return (0, conversion_1.radToDeg)(val);
    };
    MathsModule.prototype.sinInDegree = function (val) {
        return (0, conversion_1.sinInDegree)(val);
    };
    MathsModule.prototype.arcsinInDeg = function (val) {
        return (0, conversion_1.arcsin)(val);
    };
    MathsModule.prototype.cosInDegree = function (val) {
        return (0, conversion_1.cosInDegree)(val);
    };
    MathsModule.prototype.arccosInDeg = function (val) {
        return (0, conversion_1.arccos)(val);
    };
    MathsModule.prototype.tanInDegree = function (val) {
        return (0, conversion_1.tanInDegree)(val);
    };
    MathsModule.prototype.arctanInDeg = function (val) {
        return (0, conversion_1.arctan)(val);
    };
    MathsModule.prototype.cosecInDegree = function (val) {
        return (0, conversion_1.cosecInDegree)(val);
    };
    MathsModule.prototype.secInDegree = function (val) {
        return (0, conversion_1.secInDegree)(val);
    };
    MathsModule.prototype.cotInDegree = function (val) {
        return (0, conversion_1.cotInDegree)(val);
    };
    return MathsModule;
}());
exports["default"] = MathsModule;
