import IPlatform from "./IPlatform";

export default class PlayStation implements IPlatform{
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