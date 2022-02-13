var currentNumberElement = document.getElementsById('currentNumber');
var currentNumber = 0;

function increment() {
    currentNumber+= 1;
    
    currentNumberElement.innerHTML = currentNumber; // Pega o conteudo do elemento span (o zero)
}


function decrement() {
    currentNumber-= 1;
    
    currentNumberElement.innerHTML = currentNumber; 
}