console.log(`Trabalhando com Condicionais`);

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

const idadeComprador = 20;
const estaAcompanhada = false;
const temPassagemComprada = true;

console.log("Destinos Possíveis:");
console.log(listaDeDestinos);

// if (idadeComprador >= 18) { // se
//     console.log("Comprador maior de idade");

//     listaDeDestinos.splice(1, 1);
// }
// else if (estaAcompanhada) {
//     console.log("Comprador está acompanhado");

//     listaDeDestinos.splice(1, 1);
// } else {
//     console.log("Não é maior de idade e não posso vender");
// }

// > maior , < menor , >= maior ou igual , <= menor ou igual , == igual.

if (idadeComprador >= 18 || estaAcompanhada == true) {
  // || significa ou.
  console.log("Boa Viagem!!");

  listaDeDestinos.splice(2, 1);
} else {
  console.log("Não é maior de idade e não está acompanhado não posso vender");
}

console.log("Embarque: \n\n"); // \n pula uma linha.

if (idadeComprador >= 18 && temPassagemComprada) {
  // && significa and.
  console.log("Boa Viagem");
} else {
  console.log("Você não pode embarcar");
}

console.log(listaDeDestinos);
