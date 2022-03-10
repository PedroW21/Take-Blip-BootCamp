const precoAlcool = 1.20;
const precoGasolina = 2.30;
const rendimentoAlcool  = 10.00;
const rendimentoGas = 15.00;

const precoPorKmAlcool =  precoAlcool / rendimentoAlcool;

console.log(precoPorKmAlcool);

const precoPorKmGasolina =  precoGasolina / rendimentoGas ;

console.log(precoPorKmGasolina);

const maisEconomico = precoPorKmGasolina <= precoPorKmAlcool ? 'G' : 'A';

console.log(maisEconomico);