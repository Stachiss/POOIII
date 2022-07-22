import Transportadora from "./transportadora/Transportadora";
import TransportadoraAdapter from "./adapters/TransportadoraAdapter";
import Correios from "./correios/Correios";
import ICorreios from "./correios/ICorreios";

const pacote:ICorreios= new TransportadoraAdapter(new Transportadora());
pacote.sendCorreios();
pacote.receiveCorreios();