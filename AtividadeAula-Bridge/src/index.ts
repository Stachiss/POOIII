import IPlatform from "./platforms/IPlatform";
import Xbox from "./platforms/Xbox";
import PlayStation from "./platforms/PlayStation";
import Play from "./gaming/Play";
import AdvancedPlay from "./gaming/AdvancedPlay";

function startAdvancedPlay(platform: IPlatform){
    console.log("Carregando...");
    const game = new AdvancedPlay(platform);
    game.playing();
    game.challenge();
    game.result();
}

console.log("");
startAdvancedPlay(new Xbox());
console.log("");
startAdvancedPlay(new PlayStation());