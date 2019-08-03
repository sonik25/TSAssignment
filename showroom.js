"use strict";
exports.__esModule = true;
var car_1 = require("./car");
var truck_1 = require("./truck");
var cdplayer_1 = require("./cdplayer");
var radioplayer_1 = require("./radioplayer");
var Showroom = /** @class */ (function () {
    function Showroom() {
    }
    Showroom.prototype.selectMotor = function (vehicle) {
        var pioneer = new cdplayer_1.CDPlayer;
        var radioCity = new radioplayer_1.RadioPlayer;
        if (this.motor == 'Car') {
            var swift = new car_1.Car;
            swift.color = 'Carbon Grey';
            swift.name = 'Maruti Swift';
            var gear = swift.changeGear(2);
            var dist = swift.drive(gear, swift.fuel);
            console.log("Name of car is " + swift.name + ".");
            console.log("Car colour is " + swift.color + ".");
            console.log(dist + " Miles distance travelled by Car.");
            pioneer.turnOn();
            pioneer.playSelection(35);
        }
        else if (this.motor == 'Truck') {
            var ace = new truck_1.Truck;
            ace.name = 'Tata Ace Chhota hathi';
            ace.noOfWheel = 6;
            var gear = ace.changeGear(3);
            var dist = ace.drive(gear, ace.fuel);
            console.log("Name of Truck " + ace.name + ".");
            console.log("Truck has " + ace.noOfWheel + " wheels.");
            console.log(dist + " Miles distance travelled by Truck.");
            radioCity.turnOn();
            radioCity.playSelection(96.4);
        }
    };
    return Showroom;
}());
;
var center = new Showroom;
center.motor = 'Truck';
center.selectMotor(center.motor);
//let swift = new Car;    
//console.log(`${swift.sounSystem.playSelection(35)}`)
