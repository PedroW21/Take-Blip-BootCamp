function recebeArrayENum(arr, num) {
  try {
    if (!arr && !num) throw ReferenceError("Envio os paramentros");

    if (typeof arr == "object")
      throw new TypeError("O array precisa ser do tipo object");
    if (typeof arr == "number")
      throw new TypeError("O array precisa ser do tipo number");

    if (arr.length != num) throw RangeError("Tamanho inválido!");

    return console.log(arr);
  } 
  catch (e) {
    if (e instanceof ReferenceError) {
      console.log("Esse erro é um ReferenceError");
      console.log(e.menssage);
    } else if (TypeError) {
      console.log("Esse erro é um TypeError");
      console.log(e.menssage);
    } else if (RangeError) {
      console.log("Esse erro é um RangeError");
      console.log(e.menssage);
    } else {
        console.log(`Tipo de erro não esperado ${e}`)
    }
  }
}

array = [1, 4, 5, 7, 9];

recebeArrayENum(); // Testando Reference Error
recebeArrayENum(5,5); // Testando TypeError Object 
recebeArrayENum(array, a); // Testando TypeError Number 
recebeArrayENum(array, 6); // Testando RangeError
