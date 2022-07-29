import IConsole from "./consoles/IConsole";
import Xbox from "./consoles/Xbox";
import PlayStation from "./consoles/PlayStation";
import Play from "./gaming/Play";
import AdvancedPlay from "./gaming/AdvancedPlay";

function startAdvancedPlay(platform: IConsole){
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