function trocaPares(array) {
    if(!array) return -1;
    if(!array.length) return -1;
    for(i = 0; i < array.length ; i++) {
        if(array[i] === 0) {
            console.log("Você já é 0!!!");
        } else if(array[i] % 2 === 0) {
            console.log(`Substituindo ${array[i]} por 0...`)
            array[i] = 0;
        }
    }
    return console.log(array);
}

let array = [1,2,4,6,9,11,13,15,18];

trocaPares(null);