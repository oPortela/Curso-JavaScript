/*
Calcule a porcentagem entre 2 números.
Exemplo: 25% de 40 é 10
Fórmula da porcentagem: (y / x) * 100
Uso da função:
*/

/*function calcPct(x, y){
    pct = (y / x) * 100;
}

let x = 40;
let y = 10;
let pct = calcPct(x, y);
console.log(`${pct}% de ${x} é ${y}`);
*/

/*function calcPct(x,y) {
    let pct = (y / x) * 100;
    console.log(`${pct}% de ${x} é ${y}`);
}

let x = 40;
let y = 10;

calcPct(x, y);*/

function calcPct(x,y) {
    let pct = (y / x) * 100;
    return pct;
}

let x = 40;
let y = 10;
let pct = calcPct(x, y);
console.log(`${pct}% de ${x} é ${y}`);