/*
2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;
*/


class Pessoa {
    constructor(nome, peso, altura) {
      this.nome = nome;
      this.peso = peso;
      this.altura = altura;
    }
  
    calcularIMC() {
      return this.peso / (this.altura * this.altura);
    }
  
    dizerIMC() {
      console.log(`O IMC de ${this.nome} é ${this.calcularIMC().toFixed(2)}`);
    }

    classificarIMC() {
    
   
        const imc = this.calcularIMC();
            if (imc < 18.5) {
        return 'Abaixo do peso';
            } 
        else if (imc >= 18.5 && imc < 24.9) {
              return 'Peso normal';
            } else if (imc >= 25 && imc < 29.9) {
              return 'Sobrepeso';
            } 
        else if (imc >= 30 && imc < 34.9) {
              return 'Obesidade grau I';
            } 
        else if (imc >= 35 && imc < 39.9) {
              return 'Obesidade grau II';
            } 
        else {
              return 'Obesidade grau III';
            }
    }
        
          
            
}
  // Instancia uma pessoa chamada José
  const jose = new Pessoa('José', 70, 1.75);
  
  // José diz seu IMC
  jose.dizerIMC();

  // Instancia uma pessoa chamada Rodrigo
  const rodrigo = new Pessoa('Rodrigo', 88, 1.76);
  
  // Rodrigo diz seu IMC
  rodrigo.dizerIMC();
  rodrigo.classificarIMC();
  
