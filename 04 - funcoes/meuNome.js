function escrevaMeuNome(nome){
    console.log("Meu nome é "+ nome);
}

escrevaMeuNome("Rodrigo Rodrigues");
escrevaMeuNome("João Batista");

function verificarIdade(idade){
    if (idade >=18) {
        console.log(escrevaMeuNome('Rodrigo') + 'Maior de Idade');
    } else {
        console.log(escrevaMeuNome("Rodrigo") + "Menor de Idade");
    }
}

verificarIdade(34);


