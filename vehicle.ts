import {Iaudiable} from './iaudiable';
export class Vehicle{
    private gasMileage:number;
    private fuelAvailable:number;
    private milesTraveled:number;
    private moving:boolean=false;
    public name:string;
    public sounSystem:Iaudiable;

    constructor(public mpg:number=21, public fuel:number=18.5){
        this.gasMileage=mpg;
        this.fuelAvailable=fuel;
        this.milesTraveled=0;
    };

    public userAccessory(){

    };
    
    public changeGear(gear:number):number{
        if(gear==1){
            this.gasMileage=10;
        }else if(gear==2){
            this.gasMileage=15;
        }else if(gear==3){
            this.gasMileage=21;
        }else{
            this.gasMileage=18;
        }
        return this.gasMileage

    };

    public drive(mpg:number,fuel:number):number{
        let mT;
        mT = mpg* fuel;
        return mT
    }

    get move(){
        return this.moving
    }

    set mov(move:boolean){
        this.moving = move;
    }

};