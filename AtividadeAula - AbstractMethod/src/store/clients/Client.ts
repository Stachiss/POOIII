import TypeStore from "../conts/TypeStore";
import IDeliveryFactory from "../deliverys/interfaces/IDeliveryFactory";
import IDrink from "../drinks/interfaces/IDrink";
import IFood from "../foods/interfaces/IFood";


export default class Client{
    private drink: IDrink;
    private food: IFood;

    constructor(delivery:IDeliveryFactory, type: string){
        if(type === TypeStore.DRINK){
            this.drink = delivery.createItemDrink();
        }else if(type === TypeStore.FOOD){
            this.food = delivery.createItemFood();
        }else if(type === TypeStore.BOTH){
            this.drink = delivery.createItemDrink();
            this.food = delivery.createItemFood();
        }
    }

    getOrder():void{
        if(this.drink){
            this.drink.getOrder();
        }
        if(this.food){
            this.food.getOrder();
        }
    }
}