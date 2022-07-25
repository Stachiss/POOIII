import VideoCardType from "../videoCard/VideoCardType"
import AudioCardType from "../audioCard/AudioCardType"
import ProcessorType from "../processor/ProcessorType"
import MemorieType from "../memories/MemorieType"
import SourceType from "../source/SourceType"
import RamType from "../memories/RamType"

export default class PcFacade{
    private _videoCard: VideoCardType;
    private _audioCard: AudioCardType;
    private _processor: ProcessorType;
    private _memorie1: MemorieType;
    private _memorie2: RamType;
    private _source: SourceType;

    constructor(){
        this._videoCard = new VideoCardType();
        this._audioCard = new AudioCardType();
        this._processor = new ProcessorType();
        this._memorie1 = new MemorieType();
        this._memorie2 = new RamType();
        this._source = new SourceType();
    }

    public createCompletePc(){
        console.log("******** Criando Computador **********\n");
        this._videoCard.setVideoCard();
        this._audioCard.setAudioCard();
        this._processor.setProcessor();
        this._memorie1.setMemorie();
        this._memorie2.setRam();
        this._source.setSource();
        console.log("\n******** Criação Completa **********");
       
    }
}