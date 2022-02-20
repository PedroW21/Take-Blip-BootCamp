// /Dada a função calculaIdade, utilize os métodos call e apply para modificar o valor de this. Crie seus próprios objetos para esta atividade!

function calculaIdade(anos) {
	return console.log(`Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos} anos de idade.`);
}

const person1 = {
    nome: "Elizabete III",
    idade: 54
}

const person2 = {
    nome: "Popai",
    idade: 43
}

const person3 = {
    nome: "Trevor Belmont",
    idade: 36
}

calculaIdade.call(person1, 3);
calculaIdade.apply(person3, [2]);