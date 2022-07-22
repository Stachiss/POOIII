import ICorreios from "./ICorreios"

export default class Correios implements ICorreios{
    sendCorreios(): void {
        console.log("Entrega enviada pelo correio");
    }
    receiveCorreios(): void {
        console.log("Entrega recebida pelo correio");
    }

}