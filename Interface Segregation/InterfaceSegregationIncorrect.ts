/*
    This violates the inteface segregation principle because the class implementing this interface,
    might be forced to implement methods which it does not requre / use. To correct this we could split this 
    into more specific interfaces which can be used in conjunction with eachother to create that contract.
*/

interface IVehicle {
    getSpeed() : number;
    getVehicleType: string;
    isTaxPayed() : boolean;
    isLightsOn() : boolean;
    isLightsOff() : boolean;
    startEngine() : void;
    acelerate() : number;
    stopEngine() : void;
    startRadio() : void;
    playCd : void;
    stopRadio() : void;
}