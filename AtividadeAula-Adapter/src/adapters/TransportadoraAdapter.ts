import ICorreios from "../correios/ICorreios";
import Transportadora from "../transportadora/Transportadora";

export default class TransportadoraAdapter implements ICorreios{

    constructor(private _transportadora: Transportadora){
        console.log("Adaptando Transportadora nos Correios");
    }

    sendCorreios(): void {
       this._transportadora.send();
    }
    receiveCorreios(): void {
        this._transportadora.receive();
    }
    
}