var time1 = -1;
var time2 = 0;

var placar;

// IF ternário

time1 != -1 && time2 != -1 ? console.log("O jogo pode ocorrer!") : console.log("Este jogo não pode ocorrer!");

// IF Padrão

if (time1 > 0) {
  console.log("O time 1 fez gollll!");
  placar = time1 > time2;
} else if(time2 > 0) {
  console.log("O time 2 fez gollll!");
  placar = time2 > time1
} else {
    console.log("E acaba o primeiro tempo com placar de 0x0");
}




// Switch

switch(placar) {
    case time1 > time2:
        console.log("O time 1 vence o jogo e leva a taça para casa!");
        break;
    
    case time2 > time1:
        console.log("O time 2 vence o jogo e leva a taça para casa!");
        break;

    case time1 == time2:
        console.log("E o jogo termina em empate!");
        break;

    default:
        console.log("Tivemos problemas na tabela, aguardem!");
}