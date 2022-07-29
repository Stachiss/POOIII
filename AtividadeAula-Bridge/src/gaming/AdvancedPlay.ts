import IPlatform from "../platforms/IPlatform";
import Play from "./Play";

export default class AdvancedPlay extends Play{
    constructor(platform: IPlatform){
        super(platform);
    }
    challenge(){
        console.log("Mostrando desafios do jogo");
    }
}