const alunos = [
	{
		nome: 'Vitão',
		nota: 10,
		turma: '4C',
	},
	{
		nome: 'Ana',
		nota: 8,
		turma: '1D',
	},
	{
		nome: 'Paulo',
		nota: 6,
		turma: '3E',
	},
    {
		nome: 'Marquinhos',
		nota: 5,
		turma: '1A',
	}
];

// Primeira forma

// function alunosAprovados(array, media){
//     let aprovados = [];

//     for(let i = 0; i < array.lenght; i++){
//         if(array[i].nota >= media) {
//             aprovados.push(array[i].nome);
//         }
//     }
//     return aprovaados;
// }

// Segunda Forma

function alunosAprovados(array,media) {
    let aprovados = [];

    for(let i = 0; i < array.length; i++){
        const { nota,nome } = array[i];

        if(nota >= media) {
            aprovados.push(nome);
        }
    }
    return console.log(aprovados);
}

alunosAprovados(alunos, 6)