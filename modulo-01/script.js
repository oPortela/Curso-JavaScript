//alert("Hello World")  //vai criar uma caixa de alerta.

//console.log("Hello World 2.0")  //vai deixar registrado um log no devtools.

/*
let nome = "Matheus Portela"
let idade = 20
let cidade = "Anápolis"
let estado = "GO"

console.log(nome)
console.log(idade)
console.log(cidade)
console.log(estado)
*/

/* md01 aula 06

let nome = "Matheus"  //String
let idade = 20  //number 
let logado = true  //Boolean
let lista = ["ovo", "massa", "corante"]  //array
let nomeCompleto = {nome: "Matheus", idade: 20}  //Object

console.log(typeof nome)
console.log(typeof idade)
console.log(typeof logado)
console.log(typeof lista)
console.log(typeof nomeCompleto)
*/

/* md01 aula 09


let nome = "Matheus"; let idade = 20;

console.log(nome); console.log(idade);*/



/* md01 aula10
let
var
const nome = "Matheus";
console.log(nome)

nome = "João"
console.log(nome);*/



/* md01 aula11

let x = "2";

x = x + 8;

console.log(x);


let nome = "Matheus";
let sobreNome = "Portela";

let nomeCompleto = nome + ' ' + sobreNome;

console.log(nomeCompleto);


let n1 = 15;
let n2 = 20;
let n3 = 10;

let resultado = (n1 + n2) / n3;

console.log(resultado)
*/


/* md01 aula12

let nome = "Matheus";
let sobreNome = "Portela";

//let nomeCompleto = nome + ' ' + sobreNome;
let nomeCompleto = `${nome} Marques ${sobreNome}` 

console.log("Nome: " + nomeCompleto);



let idade = 22;

let idadeString = `idade: ${idade - 2} anos`;
//let idadeString = 'Idade: ' + idade + ' anos'; o template string substitui esse modelo aqui

console.log(idadeString);*/


/*md01 aula13 

let idade = 20;

if (idade >= 17) {
    console.log("Você é maior de idade!")
} else {
    console.log("Você é menor de idade!")
}*/


/* md01 aula14 

let idade = 20;

if (idade === 20) {
    idade = idade + 15;
    console.log("Idade adicionada com sucesso!");
    console.log(idade);
}
*/

/* md01 aula 15 

let idade = 90;

if (idade >= 18) {
    if (idade < 60) {
        console.log("você é um adulto");
    }
}

if (idade >= 18 && idade < 60) {
    console.log("Você é um adulto.")
}
*/

/* md01 aula16

let idade = 60;

if (idade < 18) {
    console.log("Você é uma criança!")
} else if (idade >= 18 && idade < 60) {
    console.log("Você é um adulto!")
} else if (idade >= 60) {
    console.log("Você é um idoso!")
}
*/

/* md01 aula 17

let idade = 20 ;

/*let adulto = idade > 18 && idade < 60;

if (adulto) {
    console.log("É adulto!")
} else {
    console.log("Não é adulto")
}

let verificacao = idade > 18;

console.log(idade > 18)

if (false) {
    console.log("Entrou")
}
*/

/*md01 aula19

let isMember = true;

let shipping = isMember ? 2 : 10;  //frete

console.log(isMember ? 'Você é membro' : 'Você não é membro')
console.log("Frete: " + shipping);

let age = 20;

let isAdult = ((age >= 18 && age < 60) ? 'Sim' : "Não");
//  ? que deu certo (true)
//  : que deu errado (false)
console.log(isAdult);
*/

/* md01 aula 20

let profession = "policial";

console.log("Profissão: " + profession) 
switch (profession) {
    case 'fiscal' : 
        console.log("Sua camisa será VERDE")
    break;
    case 'bombeiro' : 
        console.log("Sua camisa será VERMELHA")
    break;
    case 'policial' :
        console.log("Sua camisa será AZUL")
    break;
    default:
        console.log("Sua camisa será PRETA")
    break;
}

const profession1 = prompt("Qual a vaga aplicada?");
let salaryOrError = "";

switch (profession1.toLocaleLowerCase()) {
  case "programador":
    salaryOrError = "O salário é de 5 mil reais";
    break;
  case "designer":
    salaryOrError = "O salário é de 4.5 mil reais";
    break;
  case "dba":
    salaryOrError = "o salário é de 8 mil reais";
    break;
  case "qa":
    salaryOrError = "o salário é de 3 mil reais";
    break;
  default:
    salaryOrError = "Não oferecemos vagas para essa ocupação";
    break;
}

alert(salaryOrError);
*/