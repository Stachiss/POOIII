import ILand from "./Interfaces/ILand";

export default class Car implements ILand{
    startRoute(): void {
        this.getCargo();
        console.log("Carro: Iniciando trajeto");
    }
    getCargo(): void {
        console.log("Carro: Passageiros estão no carro");
    }
}