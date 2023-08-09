// - O que é uma função?

/* md02 aula 02 e 03

function gravidade() {
    console.log('A gravidade do planeta é: ');
    console.log(9.8);
}

console.log('Opa, tudo bem?');
gravidade(); //para rodar a função basta colocar seu nome mais os parenteses
*/

/* md02 aula 04 e 05

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
*/

/* md02 aula 06 

function maiorDeIdade(idade) {
    if (idade >= 18) {
        return true;
    } else {
        return false;
    }
}

let idade = 22;
let verificacao = maiorDeIdade(idade);

if(verificacao) {
    console.log("É maior de idade!");
} else {
    console.log("É menor de idade!")
}
*/

/* md02 aula 10

function somar(x, y) {
    return x + y;
}

const somar = (x, y) => { //arrow function quando vou executar mais de uma linha dentro
    let resultado = x + y;
    return resultado;
}

const subtrair = (x, y) => x - y; // Arrow function mais resumida (quando se executa somente uma linha dentro)

/*function sobrenome(sob) {
    return 'Matheus ' + sob;
}
const sobrenome = sob => 'Matheus ' + sob;

console.log(sobrenome('Portela'));
console.log(somar(16, 5));
console.log(subtrair(50, 40));

// Exemplos

function sobrenome(sob) {
    return 'Matheus ' + sob;
}

const sobrenome = sob => 'Matheus ' + sob;

const sobrenome = (sob) => 'Matheus ' + sob;

const sobrenome = (sob) => {
    return 'Matheus' + sob;
}

const sobrenome = (sob) => {
    let nomeCompleto = 'Matheus ' + sob;
    return nomeCompleto; 
}

console.log(sobrenome('Portela'));
*/


/* md02 aula11

let count = 0; // Declara e inicializa a variável global 'count' com o valor 0.

//function add() {
    count++;
}

function add() {
    let count = 0; // Declara e inicializa uma variável local 'count' com o valor 0.
    count ++; // Incrementa a variável local 'count' em 1. No entanto, esta variável é local ao escopo da função, então ela só existe durante a execução da função.
    return count;
}

add(); // Chama a função 'add()'. Isso não afeta a variável global 'count' declarada fora da função.
add(); // Chama a função 'add()' novamente. Da mesma forma, isso não afeta a variável global 'count'.
console.log(count); // Imprime o valor da variável global 'count'. Como a variável global não foi modificada pelas chamadas da função 'add()', o valor permanece 0.
console.log(add())


let countTeste = 0;
function add2(){
    let count = 0;
    return count+= 10;

}

add2()
add2()

console.log(`Count local (função): ${add2()}`)
console.log(`Count global: ${countTeste}`)
*/


function addSquares(a, b) {
    function square(x) {
        return x * x;
    }

    let sqrA = square(a);
    let sqrB = square(b);

    console.log(sqrA);
    console.log(sqrB);
    
    return sqrA + sqrB;
}
//console.log(square(2));
console.log(addSquares(2, 3));