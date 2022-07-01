import Item from "./rental/interfaces/Item";
import Location from "./Location";
import Movie from "./rental/Movie";

export default class MovieLocation extends Location{
    protected createItem():Item{
        return new Movie();
    }
}