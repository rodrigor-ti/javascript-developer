/*
1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
*/

class Carros {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca,cor,gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGastoPercurso(distanciaKM, precoCombustivel){
        return distanciaKM * this.gastoMedioPorKm * precoCombustivel;
    }
}

const city = new Carros("Honda","Preta",1/15);
console.log(city);

console.log("Para esta viagem de carro iremos gastar R$ " +city.calcularGastoPercurso(80,6.20));