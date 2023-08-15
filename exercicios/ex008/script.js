// 1. Faça om loop que mostre todas as frutas
let fruits = ['Maça', 'Uva', 'Banana'];

for(let n = 0; n < fruits.length; n++) {
    console.log(fruits[n]);
}
console.log('');

for(let i in fruits) {
    console.log(fruits[i]);
};
console.log('');

for(let fruta of fruits) {
    console.log(fruta);
}

// 2. Conte de 1 até 100 através de um while

let n1 = 1;

while (n1 <= 100) {
    console.log(n1);
    n1++;
}