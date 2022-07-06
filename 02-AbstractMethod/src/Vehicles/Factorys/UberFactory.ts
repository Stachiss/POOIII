import Airplane from "../Aerial/Airplane";
import Car from "../../Vehicles/land/Car"
import IAircraft from "../Aerial/Interfaces/IAircraft";
import ITransportFactory from "./Interfaces/ITransportFactory";
import ILand from "../land/Interfaces/ILand";

export default class UberFactory implements ITransportFactory{

    createTransportVehicle():ILand {
        return new Car;
    }

    createTransportAerial(): IAircraft {
        return new Airplane;
    }
}