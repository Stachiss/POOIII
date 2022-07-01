import Item from "./rental/interfaces/Item";

export default abstract class Location{
    startItem():void{
        const item = this.createItem();
        item.start();
        item.getDescription();
    }
    protected abstract createItem():Item;
}