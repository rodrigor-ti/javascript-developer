
const notas = [];

notas.push(10);
notas.push(8);
notas.push(9);

// pus inserir no array e pop para retirar

let soma = 0;

// for para percorrer um array e realizar o calculo
for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
}

const media = soma / notas.length;
console.log(media);

