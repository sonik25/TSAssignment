"use strict";
exports.__esModule = true;
var Vehicle = /** @class */ (function () {
    function Vehicle(mpg, fuel) {
        if (mpg === void 0) { mpg = 21; }
        if (fuel === void 0) { fuel = 18.5; }
        this.mpg = mpg;
        this.fuel = fuel;
        this.moving = false;
        this.gasMileage = mpg;
        this.fuelAvailable = fuel;
        this.milesTraveled = 0;
    }
    ;
    Vehicle.prototype.userAccessory = function () {
    };
    ;
    Vehicle.prototype.changeGear = function (gear) {
        if (gear == 1) {
            this.gasMileage = 10;
        }
        else if (gear == 2) {
            this.gasMileage = 15;
        }
        else if (gear == 3) {
            this.gasMileage = 21;
        }
        else {
            this.gasMileage = 18;
        }
        return this.gasMileage;
    };
    ;
    Vehicle.prototype.drive = function (mpg, fuel) {
        var mT;
        mT = mpg * fuel;
        return mT;
    };
    Object.defineProperty(Vehicle.prototype, "move", {
        get: function () {
            return this.moving;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "mov", {
        set: function (move) {
            this.moving = move;
        },
        enumerable: true,
        configurable: true
    });
    return Vehicle;
}());
exports.Vehicle = Vehicle;
;
