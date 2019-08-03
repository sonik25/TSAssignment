"use strict";
exports.__esModule = true;
var CDPlayer = /** @class */ (function () {
    function CDPlayer() {
    }
    CDPlayer.prototype.turnOn = function () {
        if (!this.isPlaying) {
            console.log('Turn on the CD Player');
        }
        else {
            console.log('CD Player is running');
        }
    };
    ;
    CDPlayer.prototype.playSelection = function (p) {
        console.log("Song number " + p + " is playing");
    };
    ;
    CDPlayer.prototype.turnOff = function () {
        if (this.isPlaying) {
            console.log('Turn off the CD Player');
        }
        else {
            console.log('CD Player stopped');
        }
    };
    ;
    return CDPlayer;
}());
exports.CDPlayer = CDPlayer;
