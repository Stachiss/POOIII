import Company from "./store/conts/Company";
import IAiqFomeDelivery from "./store/deliverys/IAiqFomeDelivery";
import IFoodDelivery from "./store/deliverys/IFoodDelivery";
import IDeliveryFactory from "./store/deliverys/interfaces/IDeliveryFactory";
import Client from "./store/clients/Client";

const currentCompany = Company.AIQFOME;
let delivery:IDeliveryFactory;

switch(currentCompany){
    case Company.AIQFOME:
        delivery= new IAiqFomeDelivery();
        break;
    case Company.IFOOD:
        delivery = new IFoodDelivery();
        break;
    default:
        console.log("Companhia não definida");
}

const cliente = new Client(delivery!, "BEBIDA")
cliente.getOrder();