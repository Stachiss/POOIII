import IPlatform from "../platforms/IPlatform";
import IPlay from "./IPlay";

export default class Play implements IPlay{
    constructor(public platform: IPlatform){}
    playing(): void {
        console.log("O jogo começou");
    }
    result(): void {
        console.log("Mostrando resultado do jogo");
    }
    
}