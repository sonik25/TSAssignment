"use strict";
exports.__esModule = true;
var RadioPlayer = /** @class */ (function () {
    function RadioPlayer() {
    }
    RadioPlayer.prototype.turnOn = function () {
        if (!this.isPlaying) {
            console.log('Turn on the Radio Player');
        }
        else {
            console.log('Radio Player is running');
        }
    };
    ;
    RadioPlayer.prototype.playSelection = function (p) {
        console.log(p + " frequency is set");
    };
    ;
    RadioPlayer.prototype.turnOff = function () {
        if (this.isPlaying) {
            console.log('Turn off the Radio Player');
        }
        else {
            console.log('Radio Player stopped');
        }
    };
    ;
    return RadioPlayer;
}());
exports.RadioPlayer = RadioPlayer;
