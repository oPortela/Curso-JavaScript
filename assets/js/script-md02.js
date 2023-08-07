// - O que é uma função?

/* md02 aula 02 e 03

function gravidade() {
    console.log('A gravidade do planeta é: ');
    console.log(9.8);
}

console.log('Opa, tudo bem?');
gravidade(); //para rodar a função basta colocar seu nome mais os parenteses
*/

/* md02 aula 04 e 05*/

function somar(n1, n2) {
    let resultado = n1 + n2;
    console.log('Resultado: ' + resultado);
}

somar(10, 15);

function nomeCompleto(nome, sobrenome) {
    //console.log(`${nome} ${sobrenome}`);
    return `${nome} ${sobrenome}`;
}

//nomeCompleto("João", "Silva");

let completo = nomeCompleto("Matheus", "Marques");
console.log('Nome completo: ' + completo);


// ENTRADA -> PROCESSAMENTO -> SAIDA