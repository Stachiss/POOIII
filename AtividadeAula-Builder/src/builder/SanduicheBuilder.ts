import IBuilder from "./interfaces/IBuilder";
import Sanduiche from "../products/Sanduiche";
import SanduicheType from "../components/SanduicheType";
import ProteinType from "../components/ProteinType";
import BreadType from "../components/BreadType";
import SaladType from "../components/SaladType";
import SauceType from "../components/SauceType";

export default class SanduicheBuilder implements IBuilder{
    private _sandwich = new Sanduiche();
    reset(): void {
        this._sandwich = new Sanduiche;
    }
    getSanduiche(): Sanduiche {
        return this._sandwich;
    }
    setSanduicheType(value: SanduicheType){
        return this._sandwich.sandwichType = value;
    }
    setBread(bread: BreadType){
        return this._sandwich.breadType = bread;
    }
    setProtein(protein: ProteinType){
        return this._sandwich.proteinType = protein;
    }
    setSalad(salad: SaladType){
        return this._sandwich.saladType = salad;
    }
    addSauces(sauce: SauceType){
        return this._sandwich.addSauces(sauce);
    }

}