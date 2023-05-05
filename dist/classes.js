"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(make, model, price) {
        var _this = this;
        this.setPrice = function (price) {
            _this.price = price;
        };
        this.setMake = function (make) {
            _this.make = make;
        };
        this.setModel = function (model) {
            _this.model = model;
        };
        this.getPrice = function () {
            return _this.price;
        };
        this.getMake = function () {
            return _this.make;
        };
        this.getModel = function () {
            return _this.model;
        };
        this.getCompanyName = function () {
            return _this.companyName;
        };
        this.getVehicleMakeAndModel = function () {
            return _this.make + ' ' + _this.model;
        };
        this.make = make;
        this.model = model;
        this.price = price;
        this.companyName = make; // Name is unchangeable because of type readonly
    }
    return Car;
}());
var Shop = /** @class */ (function (_super) {
    __extends(Shop, _super);
    function Shop(shopName) {
        var _this = _super.call(this, 'make', 'model', 546) || this;
        _this.shopName = shopName;
        return _this;
    }
    return Shop;
}(Car));
var car = new Car('Benz', 'AMG', 456.45);
console.log('Car Make:', car.getMake());
console.log('Car Model:', car.getModel());
console.log('Car price:', car.getPrice());
console.log('Company:', car.getCompanyName());
