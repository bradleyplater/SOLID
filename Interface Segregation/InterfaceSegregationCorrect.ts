/*
    This would be the correct implementation for the Interface Segregation Principle. 
    This is because the interfaces are now seperated into their own concerns. 
    So if a vehicle had no radio it we would not need to use the IRadio interface.
    Therefore no longer depending on the Radio methods
*/

interface IVehicle {
    getSpeed() : number;
    getVehicleType: string;
    isTaxPayed() : boolean;
    isLightsOn() : boolean;
}
    
interface ILights {
    isLightsOn() : boolean;
    isLightsOff() : boolean;
}
    
interface IRadio {
    startRadio() : void;
    playCd : void;
    stopRadio() : void;
}
    
interface IEngine {
    startEngine() : void;
    acelerate() : number;
    stopEngine() : void;
}