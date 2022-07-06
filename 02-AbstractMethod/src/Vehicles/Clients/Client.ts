import IAircraft from "../Aerial/Interfaces/IAircraft";
import ITransportFactory from "../Factorys/Interfaces/ITransportFactory";
import ILand from "../land/Interfaces/ILand";
import TypeVehicle from "../conts/TypeVehicle";

export default class Client{
    private vehicles: ILand;
    private aircraft: IAircraft;

    constructor(factory:ITransportFactory, type: string){
        if(type === TypeVehicle.Land){
            this.vehicles = factory.createTransportVehicle();
        }else if(type === TypeVehicle.Aerial){
            this.aircraft = factory.createTransportAerial();
        }else if(type === TypeVehicle.Both){
            this.vehicles = factory.createTransportVehicle();
            this.aircraft = factory.createTransportAerial();
        }
    }

    startRoute():void{
        if(this.vehicles){
            this.vehicles.startRoute();
        }
        if(this.aircraft){
            this.aircraft.startRoute();
        }
    }
}