import { Car } from './car';
import{ Truck } from './truck';
import{ CDPlayer } from './cdplayer';
import{ RadioPlayer } from './radioplayer';

class Showroom{
    public motor:string;
    public selectMotor(vehicle:string){
        let pioneer = new CDPlayer;
        let radioCity = new RadioPlayer;

        if(this.motor == 'Car'){
            let swift = new Car;

            swift.color ='Carbon Grey';
            swift.name = 'Maruti Swift';        
            let gear = swift.changeGear(2);
            let dist = swift.drive(gear,swift.fuel);

            console.log(`Name of car is ${swift.name}.`);
            console.log(`Car colour is ${swift.color}.`);
            console.log(`${dist} Miles distance travelled by Car.`);
            pioneer.turnOn();
            pioneer.playSelection(35);
        }
        else if(this.motor == 'Truck'){
            let ace = new Truck;

            ace.name = 'Tata Ace Chhota hathi';
            ace.noOfWheel = 6;
            let gear = ace.changeGear(3);
            let dist = ace.drive(gear,ace.fuel);

            console.log(`Name of Truck is ${ace.name}.`);
            console.log(`Truck has ${ace.noOfWheel} wheels.`);
            console.log(`${dist} Miles distance travelled by Truck.`)
            radioCity.turnOn();
            radioCity.playSelection(96.4);
            

        }

    }
};

let center = new Showroom;
center.motor='Truck';
center.selectMotor(center.motor);


    //let swift = new Car;    
    //console.log(`${swift.sounSystem.playSelection(35)}`)
    

    


