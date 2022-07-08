import IDeliveryFactory from "./interfaces/IDeliveryFactory";
import IDrink from "../drinks/interfaces/IDrink";
import IFood from "../foods/interfaces/IFood";
import SoftDrink from "../drinks/SoftDrink"
import HotDog from "../foods/HotDog"

export default class IFoodDelivery implements IDeliveryFactory{

    createItemDrink(): IDrink {
        return new SoftDrink;
    }
    createItemFood(): IFood {
        return new HotDog;
    }
}