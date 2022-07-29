import IConsole from "./IConsole";

export default class PlayStation implements IConsole{
    constructor(){
        this.configureGame();
        console.log("PlayStation is running");
    }
    configureGame(): void {
        this.authToken();
        console.log("PlayStation: Jogo Configurado");
    }
    authToken(): void {
        console.log("PlayStation autorizando aplicação");
    }

}