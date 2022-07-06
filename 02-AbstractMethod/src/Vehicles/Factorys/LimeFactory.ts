import IAircraft from "../Aerial/Interfaces/IAircraft";
import ITransportFactory from "./Interfaces/ITransportFactory";
import ILand from "../land/Interfaces/ILand";
import Scooter from "../land/Scooter";
import Drone from "../Aerial/Drone";

export default class UberFactory implements ITransportFactory{

    createTransportVehicle():ILand {
        return new Scooter;
    }

    createTransportAerial(): IAircraft {
        return new Drone;
    }
}