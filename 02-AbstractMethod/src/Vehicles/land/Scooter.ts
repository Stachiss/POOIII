import ILand from "./Interfaces/ILand";

export default class Scooter implements ILand{
    startRoute(): void {
        this.getCargo();
        console.log("Scooter: Iniciando trajeto");
    }
    getCargo(): void {
        console.log("Scooter: Carga está no scooter");
    }
}