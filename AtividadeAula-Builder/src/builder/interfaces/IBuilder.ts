export default interface IBuilder{
    reset():void;
    getSanduiche();
    setSanduicheType(SanduicheType);
    setBread(bread);
    setProtein(protein);
    setSalad(salad);
    addSauces(sauce);
}