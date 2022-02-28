//Primeiro exercicio

function somaNumeros(arr) {
  return arr.reduce((prev, current) => prev + current);
}

const array = [1, 3, 4, 5];

console.log(somaNumeros(array));

//Segundo Exercicio

const lista = [
  {
    nome: "Toddy",
    preco: 12.54,
  },
  {
    nome: "Leite",
    preco: 4.2,
  },
  {
      nome: "Pão Francês",
      preco: 1.20
  },
];

var dinheiroDisp = 55;

function calculaRestoDinheiro(dinheiroDisp, lista) {
    return lista.reduce((prev, current, index) => {
        console.log("rodada", index + 1);
        console.log({ prev });
        console.log({ current });
        return prev - current.preco;
    }, dinheiroDisp)
}

console.log(calculaRestoDinheiro(dinheiroDisp, lista));