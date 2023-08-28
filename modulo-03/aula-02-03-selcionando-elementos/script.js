//DOM = 'Document Object Model';

let elementos = document.getElementsByTagName("h1");
let paragrafos = document.getElementsByTagName('p');
let div = document.getElementsByTagName('div');
let divTeste = document.getElementById("teste");
let classBotao = document.getElementsByClassName("botao");


let querySelecaoClass = document.querySelector(".botao"); // podemos usar desta forma também aonde informamos as tags, ids ou classes igual no css
let querySelecaoDiv = document.querySelector("#teste");
let querySelecaoH1 = document.querySelector("h1");

let listaLi = document.querySelectorAll("li");
let listaLiNew = document.querySelectorAll("#teste3 ul li");

let divAll = document.querySelectorAll('.botao');
let divNormal = document.querySelector(".botao");

console.log(elementos[0]);
console.log(paragrafos[0]);
console.log(div[1]);
console.log(divTeste);
console.log(classBotao);
console.log(querySelecaoClass);
console.log(querySelecaoDiv);
console.log(querySelecaoH1);
console.log(listaLi[0]);
console.log(listaLiNew[1])
console.log(divAll);
console.log(divNormal);