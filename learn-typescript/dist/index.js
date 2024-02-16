"use strict";
;
var DoubleDigitNums;
(function (DoubleDigitNums) {
    DoubleDigitNums[DoubleDigitNums["Small"] = 10] = "Small";
    DoubleDigitNums[DoubleDigitNums["Medium"] = 11] = "Medium";
    DoubleDigitNums[DoubleDigitNums["Large"] = 12] = "Large";
})(DoubleDigitNums || (DoubleDigitNums = {}));
;
let singleSize = 1;
console.log(singleSize);
let doubleSize = DoubleDigitNums.Medium;
console.log(doubleSize);
//# sourceMappingURL=index.js.map