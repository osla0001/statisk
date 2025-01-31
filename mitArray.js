// constanter kan ikke ændres, variabler kan ændres efterfølgende
const mitArray = ["Peter", "Troels", "Keld"];

// "navn", betyder tag et element fra koden
// map looper (gentager)
const nytArray = mitArray.map((navn) => `<li>${navn}</li>`);

const string = nytArray.join("");
document.querySelector("ul").innerHTML = nytArray;
