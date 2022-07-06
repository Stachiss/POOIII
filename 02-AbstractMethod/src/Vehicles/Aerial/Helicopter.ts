import IAircraft from "./Interfaces/IAircraft";

export default class Helicopter implements IAircraft{
    startRoute(): void {
        this.checkWind();
        this.getCargo();
        console.log("Helicóptero decolou");
    }
    getCargo(): void {
        console.log("Helicóptero: Passageiros a bordo do helicóptero");
    }
    checkWind(): void {
        console.log("Helicóptero: Ventos a 32 km/h");
    }
}