import ITransportadora from "./ITransportadora";

export default class Transportadora implements ITransportadora{
    send(): void {
        console.log("Entrega enviada pela transportadora");
    }
    receive(): void {
        console.log("Entrega recebida pela transportadora");
    }
    
}