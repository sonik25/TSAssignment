import { Iaudiable } from "./iaudiable";

export class RadioPlayer implements Iaudiable{
    public isPlaying:boolean;
    public turnOn():void{
        if(!this.isPlaying){
            console.log('Turn on the Radio Player');
        }
        else{
            console.log('Radio Player is running');
        }
        
    };
    public playSelection(p:number):void{
        console.log(`${p} frequency is set`);

    };
    public turnOff():void{
        if(this.isPlaying){
            console.log('Turn off the Radio Player');
        }
        else{
            console.log('Radio Player stopped');
        }

    };    

}