import IFood from "./interfaces/IFood";

export default class HotDog implements IFood{
    getOrder(): void {
        this.cook();
        this.cooked();
        console.log("HotDog colocado no pedido");
    }
    cook(): void {
        console.log("HotDog está sendo preparado");
    }
    cooked(): void {
        console.log("HotDog pronto");
    }
}