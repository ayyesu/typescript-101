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
var addID = function (obj) {
    var id = Math.random().toString(10);
    return __assign(__assign({}, obj), { id: id });
};
var adminUser = {
    name: 'Daniel',
};
var results = addID(adminUser);
console.log(results);
