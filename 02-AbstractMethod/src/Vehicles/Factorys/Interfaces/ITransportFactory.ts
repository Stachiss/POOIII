import IAircraft from "../../Aerial/Interfaces/IAircraft";
import ILand from "../../land/Interfaces/ILand";

export default interface ITransportFactory{
    createTransportVehicle():ILand;
    createTransportAerial():IAircraft;
}