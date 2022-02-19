let array = [1, "Bom dia!", 2, "Good Morning!", 3, "Bonjour!"];
let array2 = ["Hello", ["Oie"], ["Mas oque é issu"], "El Papatron"];

console.log(array);

// Metodos

array2.forEach(function(item, index){ // imprimindo cada item e seu indicice
    console.log(item, index);
})

array.push("novo item"); // impurra um novo dado dentro do array
console.log(array);

array.pop(); //remove o ultimo item do array
console.log(array);

array.shift(); // remove o primeiro item do array
console.log(array);

array.unshift("item no inicio"); // adiciona um item no inicio do array
console.log(array);

console.log(array2.indexOf("El Papatron")); // retorna o indice do item (elementro dentro do array)

array.splice(0,1); // apaga os elementos com os indicies indicados
console.log(array);

let arraySlicado = array.slice(0,3); // Pega os indicies selecionados

console.log(arraySlicado);