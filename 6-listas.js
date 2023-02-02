console.log(`Trabalhando com Listas`);

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(`Salvador`,`São Paulo`,`Rio de Janeiro`);
//Arrays são para criar listas no js , de maneira fácil e rápido sem precisar ficar declarando variáveis e pedindo para imprimir na tela.

listaDeDestinos.push(`Curitiba`);
//Adicionando um item na lista de Destinos.

console.log("Destinos Possíveis:");
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1);//Posição de elementos em listas sempre começa com o índice 0.
console.log(listaDeDestinos);

console.log(listaDeDestinos[1]);
