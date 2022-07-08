import IFood from "./interfaces/IFood";

export default class Hamburguer implements IFood{
    getOrder(): void {
        this.cook();
        this.cooked();
        console.log("Hamburguer colocado no pedido");
    }
    cook(): void {
        console.log("Hamburguer está sendo preparado");
    }
    cooked(): void {
        console.log("Hamburguer pronto");
    }
}