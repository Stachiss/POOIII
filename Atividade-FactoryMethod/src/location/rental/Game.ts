import Item from "./interfaces/Item";

export default class Game implements Item{
    start():void{
        console.log('O jogo foi iniciado');
    }
    getDescription(): void {
        console.log("Jogo de terror desevolvido por Visceral Games")
    }
}