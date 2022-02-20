function verificacao (num1,num2) {

    let somaDosValores = num1 + num2;

    if(num1 == num2) {
        if(somaDosValores < 10){
            console.log(`Os números ${num1} e ${num2} são iguais. Sua soma é ${somaDosValores} e é menor do que 10 e menor que 20`);
        }
        else if(somaDosValores > 10 && somaDosValores < 20){
            console.log(`Os números ${num1} e ${num2} são iguais. Sua soma é ${somaDosValores} e é maior do que 10 e menor que 20`);
        }
        else {
            console.log(`Os números ${num1} e ${num2} são iguais. Sua soma é ${somaDosValores} e é maior do que 10 e maior que 20`);
        }
    } else if(somaDosValores < 10) {
        console.log(`Os números ${num1} e ${num2} são diferentes. Sua soma é ${somaDosValores} e é menor do que 10 e menor que 20`)
    } else if(somaDosValores > 10 && somaDosValores < 20){
        console.log(`Os números ${num1} e ${num2} são diferentes. Sua soma é ${somaDosValores} e é maior do que 10 e menor que 20`)
    } else {
        console.log(`Os números ${num1} e ${num2} são diferentes. Sua soma é ${somaDosValores} e é maior do que 10 e maior que 20`);
    }
}

verificacao(1,1); //Funcionando em numeros iguais e que sao menores que 10
verificacao(6,6); // Funcionando em numeros iguais e que sao maiores que 10 e menores que 20
verificacao(11,11); // Funcionando em numeros iguais e que sao maiores que 20
verificacao(1,2); // Funcionando em numeros diferentes e que sao menores que 10
verificacao(7,4); // Verificando em numeros que sao diferentes e que sao maiores que 10 e menores que 20
verificacao(32, 44); // Verificando numeros diferentes que sao maiores que 20