// Map sem this

var numerosCrus  = [1, 2, 4, 8, 12];

console.log(numerosCrus);

numerosMultiplicados = numerosCrus.map((value) => value*2);

console.log(numerosMultiplicados);


// Map com this

const banana = {
    value: 9,
}

const melancia = {
    value: 4.51,
}


function mapThis(array, thisArg){
    return array.map((item) => {item * this.value;}, thisArg);
}

arrayNum = [1,2,5,8]

console.log("this -> banana",mapThis(arrayNum, banana));

console.log("this -> banana", mapThis(arrayNum, melancia));