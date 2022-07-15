import Director from "./builder/Director";
import SanduicheBuilder from "./builder/SanduicheBuilder";
import Sanduiche from "./products/Sanduiche";

const builder: SanduicheBuilder = new SanduicheBuilder();
const director: Director = new Director(builder);

director.constructHotDog();
let hotdog: Sanduiche = builder.getSanduiche();
console.log("Fazendo lanche...");
console.log("Tipo: " + hotdog.sandwichType);
console.log("Pão: " + hotdog.breadType);
console.log("Proteína: " + hotdog.proteinType);
console.log("Salada: " + hotdog.saladType);
console.log("Molho: " + hotdog.sauceType);

console.log();
builder.reset();

director.constructXSalada();
let xsalada: Sanduiche = builder.getSanduiche();
console.log("Fazendo lanche...");
console.log("Tipo: " + xsalada.sandwichType);
console.log("Pão: " + xsalada.breadType);
console.log("Proteína: " + xsalada.proteinType);
console.log("Salada: " + xsalada.saladType);
console.log("Molho: " + xsalada.sauceType);