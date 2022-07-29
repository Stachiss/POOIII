import IConsole from "../consoles/IConsole";
import IPlay from "./IPlay";

export default class Play implements IPlay{
    constructor(public platform: IConsole){}
    playing(): void {
        console.log("O jogo começou");
    }
    result(): void {
        console.log("Mostrando resultado do jogo");
    }
    
}