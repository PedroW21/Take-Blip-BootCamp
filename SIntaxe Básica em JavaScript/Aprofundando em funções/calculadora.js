function calculadora() {
    const coletaInfo = prompt("Escolha a operação: \n 1 - Soma \n 2 - Subtração \ 3 - Divisão \n 4 - Multiplicação \n 5 - Potenciação");

}

if(!operacao || operacao >= 7) {
    alert("Erro, operação inválida!!");
    calculadora();
}

let valor1 = Number(prompt("Insira o primeiro valor: "));
let valor2 = Number(prompt("Insira o segundo valor: "));
let resultado;

function soma(){
    resultado = valor1 + valor2;
    alert(`O resultado de ${valor1} + ${valor2} = ${resultado}`);
}

function subtracao(){
    resultado = valor1 - valor2;
    alert(`O resultado de ${valor1} - ${valor2} = ${resultado}`);
}

function divisao(){ 
    resultado = valor1 / valor2;
    alert(`O resultado de ${valor1} / ${valor2} = ${resultado}`);
}

function multiplica(){
    resultado = valor1 * valor2;
    alert(`O resultado de ${valor1} * ${valor2} = ${resultado}`);
}

function potencia(){
    resultado = valor1 ** valor2;
    alert(`${valor1} elevado a ${valor2} é igual a ${resultado}`);
}

function novaOperacao(){
   let opcao = prompt("Deseja fazer outra operação? \n 1 - Sim \n 2 - Não");

    if(opcao == 1){
        calculadora();
    } else if(opcao == 2) {
        alert("Até mais :D");
    } else {
        alert("Digite uma opção válida!");
        novaOperacao();
    }
}

if(coletaInfo == 1) {
    soma();
} else if(coletaInfo == 2) {
    subtracao();
} else if(coletaInfo == 3) {
    divisao();
} else if(coletaInfo == 4) {
    multiplica();
} else if(coletaInfo == 5) {
    potencia();
}

calculadora();