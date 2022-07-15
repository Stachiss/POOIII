import IBuilder from "./interfaces/IBuilder";
import SanduicheBuilder from "./SanduicheBuilder";
import SauceType from "../components/SauceType";
import BreadType from "../components/BreadType";
import ProteinType from "../components/ProteinType";
import SaladType from "../components/SaladType";
import SanduicheType from "../components/SanduicheType";

export default class Director{
    constructor(private _builder:IBuilder){}

    constructHotDog(){
        this._builder.setSanduicheType(SanduicheType.HOTDOG);
        this._builder.setBread(BreadType.NORMAL);
        this._builder.setProtein(ProteinType.BOVINO);
        this._builder.setSalad(SaladType.TOMATE);
        this._builder.addSauces("BARBECUE");
    }
    
    constructXSalada(){
        this._builder.setSanduicheType(SanduicheType.XSALADA);
        this._builder.setBread(BreadType.INTEGRAL);
        this._builder.setProtein(ProteinType.FRANGO);
        this._builder.setSalad(SaladType.ALFACE);
        this._builder.addSauces("KETCHUP");
    }
}