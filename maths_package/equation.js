"use strict";
exports.__esModule = true;
exports.simuThreeVariable = exports.simuTwoVariable = void 0;
var determinant_1 = require("./determinant");
function simuTwoVariable(a11, a12, a21, a22, c1, c2) {
    return {
        x: (0, determinant_1.determinantTwoByTwo)(c1, a12, c2, a22) / (0, determinant_1.determinantTwoByTwo)(a11, a12, a21, a22),
        y: (0, determinant_1.determinantTwoByTwo)(a11, c1, a21, c2) / (0, determinant_1.determinantTwoByTwo)(a11, a12, a21, a22)
    };
}
exports.simuTwoVariable = simuTwoVariable;
function simuThreeVariable(a11, a12, a13, a21, a22, a23, a31, a32, a33, c1, c2, c3) {
    return {
        x: (0, determinant_1.determinantThreeByThree)(c1, a12, a13, c2, a22, a23, c3, a32, a33) / (0, determinant_1.determinantThreeByThree)(a11, a12, a13, a21, a22, a23, a31, a32, a33),
        y: (0, determinant_1.determinantThreeByThree)(a11, c1, a13, a21, c2, a23, a31, c3, a33) / (0, determinant_1.determinantThreeByThree)(a11, a12, a13, a21, a22, a23, a31, a32, a33),
        z: (0, determinant_1.determinantThreeByThree)(a11, a12, c1, a21, a22, c2, a31, a32, c3) / (0, determinant_1.determinantThreeByThree)(a11, a12, a13, a21, a22, a23, a31, a32, a33)
    };
}
exports.simuThreeVariable = simuThreeVariable;
