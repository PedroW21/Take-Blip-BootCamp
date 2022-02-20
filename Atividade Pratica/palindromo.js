// Verificando um Palíndromo
// Exemplo Professora

function verificaPalindromo(string){
    if(!string) return console.log("Escreva algo!");

    return string.split("").reverse().join("") === string;
}

verificaPalindromo("");


//Exemplo 2

function verificaPalindromo2(string) {
    if(!string) return console.log("Escreva algo!");

    for(let i=0; i < string.length / 2; i++) {
        if(string[i] !== string[string.length - 1 -i]) return false;
    }
    return true;
}

verificaPalindromo2("ama");