l = 9;
c = 8;

if (l % 2 === 0){ // Logica de coluna par com linha par
    if (c % 2 === 0) console.log(1);
    else console.log(0); // Logica de linha par com coluna impar
} else if ( c % 2 !== 0){ //Linha impar com coluna impar
    console.log(1);
}

else console.log(0); // Linha impar com coluna par

