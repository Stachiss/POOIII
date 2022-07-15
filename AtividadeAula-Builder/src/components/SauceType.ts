export default class SauceType{
    constructor(private _fim:string){}

    get fim():string{
        return this._fim;
    }
    set fim(fim:string){
        this._fim = fim;
    }
}