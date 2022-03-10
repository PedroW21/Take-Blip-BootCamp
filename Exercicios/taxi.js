const precoAlcool = 1.20;
const precoGasolina = 2.30;
const rendimentoAlcool  = 10.00;
const rendimentoGas = 15.00;

const precoPorKmAlcool =  rendimentoAlcool / precoAlcool;
console.log(precoPorKmAlcool);
const precoPorKmGasolina = rendimentoGas / precoGasolina;
console.log(precoPorKmGasolina);
const maisEconomico = precoPorKmGasolina <= precoPorKmAlcool ? 'G' : 'A';

console.log(maisEconomico);