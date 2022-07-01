import Location from "./location/Location";
import GameLocation from "./location/GameLocation";
import MovieLocation from "./location/MovieLocation";

declare var process;

let location : Location;
if (process.argv.includes("--filme")){
   location = new MovieLocation();
}else if(process.argv.includes("--jogo")){
    location = new GameLocation();
}else{
    console.error("Selecione o que deseja alugar");
}

if(location!){
    location.startItem();
}
