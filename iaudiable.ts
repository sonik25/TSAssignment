
export interface Iaudiable{
    isPlaying:boolean;
    turnOn():void;
    playSelection(p:number):void;
    turnOff():void;
}