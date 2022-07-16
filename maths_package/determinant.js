"use strict";
exports.__esModule = true;
exports.determinantThreeByThree = exports.determinantTwoByTwo = void 0;
function determinantTwoByTwo(val, val1, val2, val3) {
    return (val * val3) - (val1 * val2);
}
exports.determinantTwoByTwo = determinantTwoByTwo;
function determinantThreeByThree(a11, a12, a13, a21, a22, a23, a31, a32, a33) {
    return a11 * ((a22 * a33) - (a23 * a32)) -
        a12 * ((a21 * a33) - (a23 * a31)) +
        a13 * ((a21 * a32) - (a22 * a31));
}
exports.determinantThreeByThree = determinantThreeByThree;
