import { Iaudiable } from "./iaudiable";

export class CDPlayer implements Iaudiable{
    public isPlaying:boolean;
    public turnOn():void{
        if(!this.isPlaying){
            console.log('Turn on the CD Player');
        }
        else{
            console.log('CD Player is running');
        }
        
    };
    public playSelection(p:number):void{
        console.log(`Song number ${p} is playing`);

    };
    public turnOff():void{
        if(this.isPlaying){
            console.log('Turn off the CD Player');
        }
        else{
            console.log('CD Player stopped');
        }

    };    

}