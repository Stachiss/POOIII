import IAircraft from "./Interfaces/IAircraft";

export default class Drone implements IAircraft{
    startRoute(): void {
        this.checkWind();
        this.getCargo();
        console.log("Drone decolou");
    }
    getCargo(): void {
        console.log("Drone: Carga colocada no drone");
    }
    checkWind(): void {
        console.log("Drone: Ventos a 13 km/h");
    }
}