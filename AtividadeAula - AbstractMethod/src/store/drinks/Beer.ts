import IDrink from "./interfaces/IDrink";

export default class Beer implements IDrink{
    getOrder(): void {
        this.mix();
        console.log("Cerveja colocada no pedido");
    }
    mix(): void {
        console.log("Cerveja pronta");
    }
}