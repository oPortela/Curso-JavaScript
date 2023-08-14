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



/* md02 aula 12 

function addSquares(a, b) {
    //function square(x) {
    //    return x * x;
    //}

    //const square  = (x) => {
    //    return x * x;
    //}

    const square = (x) => x * x;

    let sqrA = square(a);
    let sqrB = square(b);

    console.log(sqrA);
    console.log(sqrB);
    
    return sqrA + sqrB;
}
//console.log(square(2));
console.log(addSquares(2, 3));
*/


/* md02 aula 13

let colors = ['blue', 'rede', 'green'];
console.log(colors[0]);


let idades = [10, 20, 30];
console.log(idades[2]);


let lista = ['algo', 30, 'sanfona', true];
console.log(lista);


let nomes = ['Matheus', 'Marques', 'Portela'];
let lista2 = ['Lista de nomes', nomes];
let lista3 = ['Lista 3', ['teste1', 'teste2', 'xx', 'yy']];


console.log(nomes);
console.log(lista2);
console.log(lista3[1][3]);


let segundo = lista3[1];
console.log(segundo[2])



let number_name = [1 , 2, 3, ['vivian', 'leven', 'juliana']];
console.log(number_name[3][0]);


let list =['1, 2, 3', 'inacreditavel', 10]
let number = ['name', 'vivian', 'juliana']

console.log(list[2], number[2])


let family = ['father','mother','son','brother','sister'];
console.log(family[4]);

//exemplo meu

let subjects = ['Limite e Derivada de uma variavel', 'Algoritimos e Programação', 'Sociedade em Rede', 'Redes de Computadores', 'Design e interface de usuário', 'Trabalho científico', 'Descanso'];

let dayOfWeek = ['Segunda-Feira', 'Terça-feira', 'Quarta-Feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo']

let monday = subjects[2];
let tuesday = subjects[0];
let wednesday = subjects[3];
let thursday = subjects[4]
let friday = subjects[1];
let saturday = subjects[5];
let sunday = subjects[6];


console.log(`${dayOfWeek[0]}: ${monday};`);
console.log(`${dayOfWeek[1]}: ${tuesday};`);
console.log(`${dayOfWeek[2]}: ${wednesday};`);
console.log(`${dayOfWeek[3]}: ${thursday};`);
console.log(`${dayOfWeek[4]}: ${friday};`);
console.log(`${dayOfWeek[5]}: ${saturday};`);
console.log(`${dayOfWeek[6]}: ${sunday};`);
*/


/* md02 aula14 

let ingredientes = [
    'agua',
    'farinha',
    'ovo',
    'corante',
    'sal',
];

//ingredientes[5] = 'Cebola';
ingredientes.push('Cebola'); // Quando quero adicionar alguma coisa no meu arrya, usa-se o push.

ingredientes.shift();//remove o primeiro item do array
ingredientes.pop();//remove o ultimo item do array

console.log(ingredientes);
console.log(`Total de ingredientes : ${ingredientes.length}`);


let study = [
    'HTML', 
];

study.push('CSS3');
study.push('JavaScript');
study.push('SQL')
study.push('PHP');

console.log(study);
console.log(`Total de matérias a se estudar: ${study.length}`)
*/


/* md02 aula 16 

let name = 'Matheus'; // variavel
let names = ['João', 'Lucas']; // array

let persons = { //objeto
    nome: 'Matheus',
    idade: 20,
    pais: 'Brasil',
    olhos: ['Preto', 'Azul'],
    caracteristicas: {
        forca: 20,
        magia: 5,
        stamina: 15
    }
};


console.log(`${persons.nome} tem ${persons.idade} anos!`);
console.log(`${persons.caracteristicas.magia}`);
console.log(persons.olhos[1]);
*/

/* md02 aula 17 

let persons = { 
    nome: 'Matheus',
    idade: 20,
    pais: 'Brasil',
    olhos: ['Preto', 'Azul'],
    caracteristicas: {
        forca: 20,
        magia: 5,
        stamina: 15
    }
};

persons.nome = 'Silva';
persons.olhos.push('verde');
persons.caracteristicas.forca += 5;

console.log(persons);
console.log(`Força: ${persons.caracteristicas.forca}`);
console.log(persons.olhos);

let personagem = {
    nome: 'Matheus',
    idade: 20,
    carros: [
        {modelo: 'Fiat', cor: 'preto'},
        {modelo: 'Ferrari', cor: 'vermelho'}
    ]
};

console.log(personagem.carros[0].modelo);
*/


/* MD02 AULA 18

let pessoa = {
    nome: 'Matheus',
    sobrenome: 'Portela',
    idade: 20,
    nomeCompleto: function() {
        return `${this .nome} ${this.sobrenome}`;
    }
}

console.log(pessoa.nome + ' ' + pessoa.sobrenome);
console.log(pessoa.nomeCompleto());

//exemplo meu
let favoritos = {
    user: 'Matheus',
    apelido: 'oPortela',
    idade: 20,
    games: [
        {
            game: 'Moratl Kombat',
            tamanho: 50,
            censura: '+18'
        },
        {
            game: 'Grand Theft Auto 5',
            tamanho: 80,
            censura: '+18'
        },
        {
            game: 'Formula 1 - The video-game',
            tamanho: 60,
            censura: 'livre'
        }
    ],
    pc: [
        processador = 'i5',
        placa_mae = 'H310',
        memoria_ram = 8,
        armazenamento = 500
    ],
    preferencias: function() {
        return `O usuário ${this.apelido} possui ${this.idade} anos de idade, e tem um computador com um processador ${this.pc[0]} que o utiliza para jogar ${this.games[1].game} que possui uma censura de ${this.games[1].censura}.`
    }
}

console.log(favoritos.preferencias());
*/

 /*md02 aula19

for(let n = 0; n <= 15; n++){
    console.log('Número ' + n);
};



//tabuada
for(let num = 1; num <=10; num++){
    console.log(`Tabuada do: ${num}`);
    for (let n = 0; n <= 10; n++) {
        calc = num * n
        console.log(`${num} x ${n} = ${calc}`)
    }
}
*/


/* md02 aula 20*/

let cores = [
    { nome: 'preto', qt: 10 },
    { nome: 'azul', qt: 5 },
    { nome: 'vermelho', qt: 15 }
];

/*cores.push('Verde', 'Rosa');*/

for(let n = 0; n < cores.length; n++){
    console.log(cores[n].qt);
};

console.log('');

for(let i in cores) { //quando coloco o in e uma variavel x, essa variavel será a chave do meu array.
    console.log(cores[i].nome);
};
console.log('');

console.log(cores[0].nome);

console.log('');

for(let cor of cores) { //o valor que tiver em cores eu coloco em cor fazendo o loop.
    console.log(cor);
}

console.log('');

for(let cor of cores) {
    console.log(`Nome: ${cor.nome} - ${cor.qt}`);
}

console.log('');

for(let i in cores) {
    cores[i].nome = cores[i].nome.toUpperCase();
};

console.log(cores);