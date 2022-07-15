import SaladType from "../components/SaladType";
import SauceType from "../components/SauceType";
import BreadType from "../components/BreadType";
import ProteinType from "../components/ProteinType";
import SanduicheType from "../components/SanduicheType";

export default class Sanduiche{
    private _protein:ProteinType;
    private _salad: SaladType;
    private _sauce: SauceType[] = [];
    private _bread: BreadType;
    private _sandwichType: SanduicheType


    get sandwichType():SanduicheType{
        return this._sandwichType;
    }
    set sandwichType(value:SanduicheType){
        this._sandwichType = value;
    }

    get proteinType():ProteinType{
        return this._protein;
    }
    set proteinType(value:ProteinType){
        this._protein = value;
    }

    get saladType():SaladType{
        return this._salad;
    }
    set saladType(value:SaladType){
        this._salad = value;
    }

    get breadType():BreadType{
        return this._bread;
    }
    set breadType(value:BreadType){
        this._bread = value;
    }

    addSauces(sauces:SauceType){
        this._sauce.push(sauces);
    }

    get sauceType():SauceType[]{
        return this._sauce;
    }
    
}