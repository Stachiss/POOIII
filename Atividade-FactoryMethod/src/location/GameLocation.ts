import Item from "./rental/interfaces/Item";
import Location from "./Location";
import Game from "./rental/Game";

export default class GameLocation extends Location{
    protected createItem():Item{
        return new Game();
    }
}