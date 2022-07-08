import IDeliveryFactory from "./interfaces/IDeliveryFactory";
import IDrink from "../drinks/interfaces/IDrink";
import IFood from "../foods/interfaces/IFood";
import Beer from "../drinks/Beer"
import SoftDrink from "../drinks/SoftDrink"
import HotDog from "../foods/HotDog"
import Hamburguer from "../foods/Hamburguer"

export default class IAiqFomeDelivery implements IDeliveryFactory{

    createItemDrink(): IDrink {
        return new Beer;
    }
    createItemFood(): IFood {
        return new Hamburguer;
    }
}