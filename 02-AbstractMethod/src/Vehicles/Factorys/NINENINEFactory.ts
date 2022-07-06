import Helicopter from "../Aerial/Helicopter";
import Motocycle from "../../Vehicles/land/Motocycle"
import IAircraft from "../Aerial/Interfaces/IAircraft";
import ITransportFactory from "./Interfaces/ITransportFactory";
import ILand from "../land/Interfaces/ILand";

export default class NINENINEFactory implements ITransportFactory{
    
    createTransportVehicle():ILand {
        return new Motocycle;
    }

    createTransportAerial(): IAircraft {
        return new Helicopter;
    }
}