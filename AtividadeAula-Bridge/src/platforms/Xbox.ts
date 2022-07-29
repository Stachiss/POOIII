import IPlatform from "./IPlatform";

export default class Xbox implements IPlatform{
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