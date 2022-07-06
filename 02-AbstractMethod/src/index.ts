import NINENINEFactory from "./Vehicles/Factorys/NINENINEFactory";
import LimeFactory from "./Vehicles/Factorys/LimeFactory"
import Company from "./Vehicles/conts/Company";
import Client from "./Vehicles/Clients/Client";
import ITransportFactory from "./Vehicles/Factorys/Interfaces/ITransportFactory";
import UberFactory from "./Vehicles/Factorys/UberFactory";

const currentCompany = Company.NINENINE
let factory : ITransportFactory;

switch(currentCompany){
    case Company.UBER:
        factory = new UberFactory();
        break;
    case Company.NINENINE:
        factory = new NINENINEFactory();
        break;
    case Company.LIME:
        factory = new LimeFactory();
        break;
    default:
        console.log("Companhia não definida");
}

const cliente = new Client(factory!, "AMBOS");
cliente.startRoute();
