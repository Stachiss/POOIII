import Item from "./interfaces/Item";

export default class Movie implements Item{
    start():void{
        console.log('O filme começou');
    }
    getDescription(): void {
        console.log("Filme do gênero drama dirigido por Quentin Tarantino")
    }
}