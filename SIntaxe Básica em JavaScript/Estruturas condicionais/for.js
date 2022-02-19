let bonecos = ["Buzz LightYear", "Woody", "Bo Peep", "Rex", "Sr Cabeça de Batata", "Sargento"];

let brinquedo = {
    Nome: "Woody",
    Tipo: "Cauboi",
    Idade: 18,
    Protagonista: true
}


// For - Executa uma instrução ate que seja falsa 

for (let i = 0; i < bonecos.length; i++) { // O i começa em zero, e enquanto ele for menor que o tamanho do array, ele executará o bloco
    console.log(i);
}

// For/In executa repetição a partir de uma propriedade

for (let i in bonecos){
    console.log(i)
}

for(i in brinquedo)
{
    console.log(i)
}