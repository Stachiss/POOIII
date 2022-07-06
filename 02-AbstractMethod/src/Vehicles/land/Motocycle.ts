import ILand from "./Interfaces/ILand";

export default class Motocycle implements ILand{
    startRoute(): void {
        this.getCargo();
        console.log("Moto: Iniciando trajeto");
    }
    getCargo(): void {
        console.log("Moto: Carga está na moto");
    }
}