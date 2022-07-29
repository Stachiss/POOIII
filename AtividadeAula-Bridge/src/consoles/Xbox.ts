import IConsole from "./IConsole";

export default class Xbox implements IConsole{
    constructor(){
        this.configureGame();
        console.log("Xbox is running");
    }
    configureGame(): void {
        this.authToken();
        console.log("Xbox: Jogo Configurado");
    }
    authToken(): void {
        console.log("Xbox autorizando aplicação");
    }

}