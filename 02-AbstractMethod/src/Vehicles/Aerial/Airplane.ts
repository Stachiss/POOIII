import IAircraft from "./Interfaces/IAircraft";

export default class Airplane implements IAircraft{
    startRoute(): void {
        this.checkWind();
        this.getCargo();
        console.log("Avião decolou");
    }
    getCargo(): void {
        console.log("Avião: Passageiros a bordo do avião");
    }
    checkWind(): void {
        console.log("Avião: Ventos a 25 km/h");
    }
}