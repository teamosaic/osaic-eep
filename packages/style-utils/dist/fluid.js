"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.fluid = void 0;
// Settings
var defaultMinFactor = 0.7, defaultMaxBreak = 1440, defaultMinBreak = 375;
// Make a CSS clamp with a calc value that fluidly scales a value between the
// max px value and the min px value over the range specified by the maxBreak
// and minBreak values.
// Examples:
// - fluid(40)
// - fluid(40, 20, 1280)
// - fluid(40, 20, { minBreak: 300 })
// - fluid({ max: 40, minBreak: 300 })
function fluid() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var _a = processArgs(args), max = _a.max, min = _a.min, maxBreak = _a.maxBreak, minBreak = _a.minBreak, clampValue = makeCalc(max, min, maxBreak, minBreak);
    return "clamp(".concat(min, "px, ").concat(clampValue, ", ").concat(max, "px)");
}
exports.fluid = fluid;
// Process the args, which works like the old Stylus function where any arg
// can be a value or the remaining options
function processArgs(args) {
    // Default options
    var defaultOptions = {
        max: null,
        min: null,
        maxBreak: null,
        minBreak: null,
        defaultMinFactor: defaultMinFactor,
        defaultMaxBreak: defaultMaxBreak,
        defaultMinBreak: defaultMinBreak
    };
    // Reduce the arry of arg numbers and objects to an object
    var options = args.reduce(function (options, arg, index) {
        var _a;
        if (typeof arg == 'object')
            return __assign(__assign({}, options), arg);
        else
            return __assign(__assign({}, options), (_a = {}, _a[optionKeyFromIndex(index)] = arg, _a));
    }, defaultOptions);
    // Set defaults for empty values
    if (options.max == null)
        throw 'Max value is required';
    if (!options.min)
        options.min = options.max * options.defaultMinFactor;
    if (!options.maxBreak)
        options.maxBreak = options.defaultMaxBreak;
    if (!options.minBreak)
        options.minBreak = options.defaultMinBreak;
    // Return options
    return options;
}
// Figure out which option an arg index represents
function optionKeyFromIndex(argIndex) {
    switch (argIndex) {
        case 0: return 'max';
        case 1: return 'min';
        case 2: return 'maxBreak';
        case 3: return 'minBreak';
        default: throw "Unexpected arg index ".concat(argIndex);
    }
}
// Make the calc that fluidly scales the value betwee max and min
function makeCalc(max, min, maxBreak, minBreak) {
    var ratio = (max - min) / (maxBreak - minBreak), baseSize = "".concat(min - ratio * minBreak, "px"), scalingSize = "".concat(ratio * 100, "vw");
    return "calc(".concat(baseSize, " + ").concat(scalingSize, ")");
}
