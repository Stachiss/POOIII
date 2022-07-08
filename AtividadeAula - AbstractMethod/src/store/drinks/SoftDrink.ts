import IDrink from "./interfaces/IDrink";

export default class SoftDrink implements IDrink{
    getOrder(): void {
        this.mix();
        console.log("Drink colocado no pedido");
    }
    mix(): void {
        console.log("Drink pronto");
    }
}