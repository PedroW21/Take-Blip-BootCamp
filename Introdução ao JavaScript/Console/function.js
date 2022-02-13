function pares(array) {
    let evenNum = [];
    for(let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evenNum.push(array[i]);
        }
    }
    console.log(`Os números pares são: ${evenNum}`);
}

let array = [1, 5, 8, 12, 24, 38, 49, 57];

pares(array);